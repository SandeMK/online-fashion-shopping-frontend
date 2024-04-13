import toast from "react-hot-toast"
import { StyleViewState } from "."
import { apiConfig } from "../../apis/config"
import { User } from "../../types/user"

export const Actions = (state: Partial<StyleViewState>, setState: (initState: Partial<StyleViewState>) => void) => {
    return {
        getStyle: async (styleId: string, custom_token: string) => {
            console.log('styleId', styleId)
            if(!custom_token) {
                toast.error('An error occurred while fetching style data')
                return
            }
            try {
                const response = await fetch(`${apiConfig.baseURL}/styles/${styleId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${custom_token}`
                    }
                })
               
                if(response.ok) {
                    const data = await response.json()
                    setState({ data: { style: data.style, stylists: [...new Set(data.stylists)] as User[] } })
                }
            } catch (error) {
               toast.error('An error occurred while fetching style data')
            }
            //setState({ data:{ style: getStyleResponse.style, stylists: getStyleResponse.stylists as unknown as User[]} })
        }
    }
}

export const getStyleResponse = {
    "style": {
        "id": "3AWpB9ZVpwP0fTq9oEBu",
        "name": "Gothic",
        "description": "Gothic style is characterized by its dark, dramatic aesthetic, drawing inspiration from various subcultures and historical periods. It often features black clothing, lace, leather, and metal accessories. Common elements include corsets, flowing skirts, velvet fabrics, fishnet stockings, and platform boots. Accessories such as chokers, studs, and occult symbols are also prevalent.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/6/69/Goth_at_Kensal_Green_Cemetery.JPG"
    },
    "stylists": [
        {
            "id": "vFUcyzoCtXhm33wPrzdpOPa9sKW2",
            "email": "sandemk@test.com",
            "display_name": "Pilasande Mkhuseli",
            "phone_number": "+27606110272",
            "user_type": "client",
            "bio": "I specialize in gothic fashion and have been in the industry for over 10 years. I have worked with various clients and have a keen eye for detail. I am passionate about helping my clients express themselves through their clothing and accessories. I am excited to work with you and create a unique look that reflects your personal style. Contact me to schedule a consultation and let's bring your vision to life!",
            "styles": [
                "3AWpB9ZVpwP0fTq9oEBu",
                "4fw1ApBHntI2J75Fh1Bk"
            ]
        },
        {
            "id": "vFUcyzoCtXhm33wPrzdpOPa9sKW2",
            "email": "sandemk@test.com",
            "display_name": "Musa Mathebula",
            "phone_number": "+27606110272",
            "user_type": "client",
            "bio": "I do gothic fashion and have been in the industry for over 10 years. I have worked with various clients and have a keen eye for detail. I am passionate about helping my clients express themselves through their clothing and accessories. I am excited to work with you and create a unique look that reflects your personal style. Contact me to schedule a consultation and let's bring your vision to life!",
            "styles": [
                "3AWpB9ZVpwP0fTq9oEBu",
                "4fw1ApBHntI2J75Fh1Bk"
            ]
        }
    ]
}