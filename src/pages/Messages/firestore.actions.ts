import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore"
import { MessagesState } from "."
import { User } from "../../types/user"
import { firestore } from "../../firebase"
import { ChatData } from "./interfaces"

export const FirestoreActions = (state: Partial<MessagesState>, setState: (initState: Partial<MessagesState>) => void, { id }: User) => {

    const getUser = async (id: string) => {
        const docRef = doc(firestore, 'users', id)
        const data = (await getDoc(docRef)).data()

        return {
           id: data.id,
           display_name: data.display_name,
           bio: data.bio,
        } as User
    }

    return {
        chatDataStream: () => {
            const chatRef = collection(firestore, 'chats')
            const q = query(chatRef, where('members', 'array-contains', id))

            return onSnapshot(q, {
                next: async (snapshot) => {
                    console.log('member_id: ', id)
                    console.log('Chat data: ', snapshot, snapshot.docs.map(doc => doc.data()));
                    //get all the other participants if we dont already have them
                    for(const doc of snapshot.docs) {
                        const data = doc.data()

                        const conversation_id = doc.id
                        // add entry if it doesn't exist
                        if(!state.chatData.find((chat) => chat.conversation_id === conversation_id)) {
                            // get the other user
                            const receiver_id = data.members.find((_id: string) => _id !== id)
                            const receiver = await getUser(receiver_id)

                            const entry: ChatData = {
                                conversation_id,
                                receiver_id,
                                receiver_name: receiver.display_name,
                                receiver_bio: receiver.bio,
                            }

                            setState({ chatData: [...state.chatData, entry] })
                        }
                    }
                },
                error: (error) => {
                    console.error("Error fetching chat data: ", error);
                }
            })
        }
    }
}