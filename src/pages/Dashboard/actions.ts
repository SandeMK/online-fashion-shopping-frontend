//import { apiConfig } from "../../apis/config"
import { State } from "./interfaces"

export const Actions = (state: Partial<State>, setState: (state: Partial<State>) => void) => {
    return {
        getStyles: async (custom_token: string) => {
            if(state.isLoading) return
            console.log('isLoading', state.isLoading)
            console.log('custom_token', custom_token)
            /*setState({ isLoading: true })
            console.log('isLoading', state.isLoading)
            console.log('custom_token', custom_token)
            try {
                const response = await fetch(`${apiConfig.baseURL}/styles/all`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${custom_token}`
                    },

                })
                if (response.ok) {
                    const result = await response.json()
                    setState({ styles: result.styles })
                }
            } catch (error) {
                //return { message: error.message }
            } finally {
                setState({ isLoading: false })
            }*/

            setState({ styles: styles })
        }
    }
}

export const styles = [
    {
        "id": "3AWpB9ZVpwP0fTq9oEBu",
        "name": "Gothic",
        "description": "Gothic style is characterized by its dark, dramatic aesthetic, drawing inspiration from various subcultures and historical periods. It often features black clothing, lace, leather, and metal accessories. Common elements include corsets, flowing skirts, velvet fabrics, fishnet stockings, and platform boots. Accessories such as chokers, studs, and occult symbols are also prevalent.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/6/69/Goth_at_Kensal_Green_Cemetery.JPG"
    },
    {
        "id": "4fw1ApBHntI2J75Fh1Bk",
        "name": "Formal Style",
        "description": "Formal style is characterized by its polished and sophisticated aesthetic, suitable for upscale events and occasions. It emphasizes tailored garments, refined silhouettes, and attention to detail. For men, this often includes tailored suits in classic colors like black, navy, or charcoal, paired with dress shirts, ties, and leather dress shoes. Women typically opt for elegant dresses or tailored separates, such as a chic blouse paired with a pencil skirt or dress pants, complemented by heels and statement jewellery.",
        "image_url": "https://newsmeter.in/h-upload/2021/01/12/290868-formal-style.webp"
    },
    {
        "id": "96eaMm5bGycHToeh4vVh",
        "name": "Sporty",
        "description": "Sporty style draws inspiration from athletic wear, featuring comfortable and functional pieces like joggers, sweatshirts, and sneakers. It combines sportswear elements with casual streetwear for a relaxed and active look.",
        "image_url": "https://qph.cf2.quoracdn.net/main-qimg-0f25c38fef6f444d5ead833ae2dea84f-lq"
    },
    {
        "id": "H0TqSSsyylaanNY7tyHx",
        "name": "Casual",
        "description": "Casual style is relaxed, comfortable, and effortless, perfect for everyday wear and informal occasions. It prioritizes comfort and functionality while still allowing for personal expression. Common elements of casual attire include jeans, t-shirts, sweatshirts, leggings, shorts, sneakers, sandals, and flats. Layering and mixing different textures and patterns are often key components of casual dressing, creating a laid-back yet stylish look suitable for various activities and settings.",
        "image_url": "https://global-uploads.webflow.com/5eca30fd2b50b671e2107b06/5edbf0f381168b0bd18fcdf6_Casual%20Fashion%20Style.webp"
    },
    {
        "id": "KTbwdU3wX4CMeYdIUoV9",
        "name": "Minimalist",
        "description": "Minimalist style is characterized by simplicity, clean lines, and a focus on essential pieces. It emphasizes quality over quantity and often features neutral colors such as white, black, gray, and beige. Key wardrobe staples include well-fitted basics like tailored trousers, simple tops, oversized sweaters, and structured outerwear. Accessories are understated and functional, with items like a classic watch, leather tote bag, and sleek sneakers or minimalist sandals. ",
        "image_url": "https://global-uploads.webflow.com/5eca30fd2b50b671e2107b06/5edbed1381168b1f1a8fa7f1_Minimalist%20Fashion%20Style.webp"
    },
    {
        "id": "KwLQKuG6MkvP9DpVii7F",
        "name": "Classic",
        "description": "Classic style is timeless, elegant, and refined, characterized by clean lines, simple silhouettes, and sophisticated pieces that never go out of fashion. It emphasizes quality over quantity and favors well-tailored garments in neutral colors like black, white, navy, and beige. Wardrobe staples include tailored blazers, button-down shirts, well-fitted trousers, pencil skirts, trench coats, and simple accessories such as pearl earrings or a leather handbag.",
        "image_url": "https://cdn.shopify.com/s/files/1/0263/8345/0196/files/Vintage-Fashion-Style_480x480.jpg?v=1700050499"
    },
    {
        "id": "RhdXt7dSO5TVjiS31D17",
        "name": "Grunge",
        "description": "Grunge style emerged from the underground music scene in the 1990s and is characterized by its rebellious, anti-establishment attitude and unkempt aesthetic. It often features distressed clothing, oversized silhouettes, and a mix of contrasting textures and patterns. Common elements include flannel shirts, band t-shirts, ripped jeans, combat boots, leather jackets, and beanies.",
        "image_url": "https://heartifb.com/images/grunge-fashion-style-684x1024.jpeg"
    },
    {
        "id": "UXewObBpIIaByPz6CIiR",
        "name": "Elegance",
        "description": "Elegant style exudes sophistication and refinement, characterized by clean lines, luxurious fabrics, and understated glamour. It emphasizes timeless pieces that are impeccably tailored and exude confidence. Common elements include tailored blazers, sheath dresses, crisp button-down shirts, pencil skirts, and trousers in neutral colors like black, white, navy, and beige. Accessories such as pearls, delicate jewelry, and structured handbags add a touch of elegance to the overall look.",
        "image_url": "https://global-uploads.webflow.com/5eca30fd2b50b671e2107b06/5edbee702f7ba2625ad1eb98_Sophisticated%20Fashion%20Style.webp"
    },
    {
        "id": "WdEE9ayNYwLPPcFZMFkG",
        "name": "Streetwear",
        "description": "Streetwear is a casual style influenced by youth culture and urban fashion. It often includes graphic t-shirts, hoodies, sneakers, and baseball caps. Streetwear is known for its edgy and often oversized silhouettes.",
        "image_url": "https://heartifb.com/images/streetwear-fashion-684x1024.jpg"
    },
    {
        "id": "YZcwXbNY5UwkgKBCToMr",
        "name": "Punk Fashion",
        "description": "Punk style is rebellious and edgy, featuring distressed clothing, leather jackets, ripped jeans, and band t-shirts. It embraces DIY aesthetics, bold accessories like studs and spikes, and unconventional hair and makeup.",
        "image_url": "https://assets.vogue.com/photos/5877237b4188c650566587e4/master/pass/magazine-rebel-yell-01_150010145999.jpg"
    },
    {
        "id": "bsCUk2JsbXefnrYfsYCI",
        "name": "Artsy",
        "description": "The artsy style is creative, eclectic, and individualistic, reflecting a unique and expressive approach to fashion. It prioritizes self-expression and often incorporates unconventional elements, mixing colors, patterns, and textures in unexpected ways. Artsy dressers are drawn to unique and statement pieces, such as asymmetrical silhouettes, bold prints, handmade or artisanal accessories, and vintage finds.",
        "image_url": "https://global-uploads.webflow.com/5eca30fd2b50b671e2107b06/5edbf09fb414c7441ba85256_Artsy%20Fashion%20Style.webp"
    },
    {
        "id": "cUafJfAYzbGt0fkXfMUx",
        "name": "Business Casual",
        "description": "Business casual style strikes a balance between formal business attire and relaxed, comfortable clothing. It typically includes a combination of tailored pieces with more casual items, allowing for versatility and professionalism without the formality of a traditional suit. Common elements include dress shirts, blouses, tailored trousers, chinos, skirts, blazers, cardigans, and loafers or dress shoes",
        "image_url": "https://heartifb.com/images/business-casual-outfit-683x1024.jpeg"
    },
    {
        "id": "j3GobpbVFxnYyljokccz",
        "name": "Athleisure",
        "description": "Athleisure style seamlessly blends athletic wear with casual attire, creating a comfortable yet fashionable look suitable for both workouts and everyday activities. It features sporty elements like leggings, joggers, hoodies, and sneakers, paired with casual basics such as t-shirts, tank tops, and oversized sweatshirts. Athleisure pieces often incorporate technical fabrics, moisture-wicking properties, and ergonomic designs for maximum comfort and performance.",
        "image_url": "https://gabriellearruda.com/wp-content/uploads/2020/06/sweatshortoutfit4.jpg"
    },
    {
        "id": "rByrJ9ymn9NVAVl0uCoz",
        "name": "Bohemian",
        "description": "Bohemian style, often referred to as \"boho,\" is characterized by a free-spirited and eclectic mix of patterns, textures, and colors. It incorporates elements from various cultures and eras, creating a relaxed and unconventional look.",
        "image_url": "https://heartifb.com/images/boho-fashion-style-1-683x1024.png"
    },
    {
        "id": "uoXosNj3Kk3ng6HWev5K",
        "name": "Ethnic",
        "description": "Ethnic style draws inspiration from the traditional clothing and cultural motifs of various ethnic groups and regions around the world. It celebrates diversity and craftsmanship, incorporating vibrant colors, intricate patterns, and unique textiles into fashion pieces. Common elements include embroidered blouses, printed skirts, tribal-inspired jewelry, woven fabrics, and handcrafted accessories.",
        "image_url": "https://newsmeter.in/h-upload/2021/01/12/290871-ethnic-fashion.webp"
    },
    {
        "id": "wPrwN5D50iBwOe1ElnJP",
        "name": "Exotic",
        "description": "Exotic style is a fusion of vibrant colors, bold prints, and unique textiles inspired by distant cultures and landscapes. It features flowy silhouettes, tribal motifs, and statement accessories like beaded jewelry and woven handbags, evoking a sense of adventure and wanderlust.",
        "image_url": "https://i0.wp.com/blog.treasurie.com/wp-content/uploads/2021/04/Fashion-Styles6.jpg"
    },
    {
        "id": "z3HdXfXaBzrpzhguin8g",
        "name": "Preppy",
        "description": "Preppy style, originating from traditional collegiate attire, exudes a polished and classic aesthetic. It emphasizes clean lines, tailored silhouettes, and a sophisticated yet youthful vibe. Common elements of preppy fashion include button-down shirts, polo shirts, chinos, khakis, cable-knit sweaters, blazers, loafers, boat shoes, and accessories like pearl necklaces or bow ties.",
        "image_url": "https://heartifb.com/images/preppy-look.jpeg"
    },
    {
        "id": "z48a65VNuGRVJFPuvayj",
        "name": "Vintage Clothing",
        "description": "Vintage clothing style celebrates fashion from past decades, typically ranging from the 1920s to the 1990s. It embraces retro prints, classic silhouettes, and intricate details, offering a unique and timeless aesthetic. Common pieces include tea dresses, midi skirts, high-waisted trousers, structured blazers, floral blouses, and statement accessories like brooches or cat-eye sunglasses.",
        "image_url": "https://cdn.shopify.com/s/files/1/0305/7100/4043/files/Vintage_clothing_nike_style_1024x1024.jpg?v=1662741892"
    },
    {
        "id": "zHE1zvfhh0pj0ECw6zy1",
        "name": "Chic Style",
        "description": "Chic style is sophisticated, polished, and effortlessly stylish, embodying a sense of refined elegance and fashion-forwardness. It emphasizes tailored silhouettes, high-quality fabrics, and timeless pieces with a modern twist. Common elements include well-fitted blazers, tailored trousers, pencil skirts, silk blouses, and structured dresses in neutral colors or classic patterns like stripes or checks. Accessories play a crucial role in chic styling, with items like statement jewelry, designer handbags, and sleek heels or ankle boots adding a touch of glamour to the ensemble.",
        "image_url": "https://heartifb.com/images/chic-style-outfit-652x1024.jpeg"
    }
]