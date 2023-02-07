import { Button } from 'antd'
import axios from 'axios'
import React from 'react'


const CreateHome = () => {

  
    const data = {
        banner: [
            'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1675007528/oexigrptll5ymdjr4fyz.png',
            'https://cdn.shopify.com/s/files/1/0644/2958/8701/files/web.jpg?v=1675132659%202662w%201332h',
            'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1675007531/ggvegqdxabczbs9lfm7e.png',
        ],
        collection: [
            {
                key: 'all',
                name: 'jewelry'
            },
            {
                key: 'accessories',
                name: 'accessories'
            },
            {
                key: 'collection',
                name: 'collection'
            },
            {
                key: 'watch',
                name: 'watch'
            },
            {
                key: 'gol jewelry',
                name: 'gol jewelry'
            }

        ],
        category: [
            {
                key: 'chuy',
                name: 'Dây chuyền'
            },
            {
                key: 'nh',
                name: 'Nhẫn'
            },
            {
                key: 'khuy',
                name: 'Khuyên tai'
            },
            {
                key: 'tay',
                name: 'Vòng tay'
            },
        ],
        hslider1: {
            title: 'Danh sách sản phẩm',
            item: [
                {
                    id: '63e07cdd3f58a207a55e9140',
                    name: 'Khuyên tai',
                    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1675763988/nijvgybtmjmhg4bukio3.png'
                },
                {
                    id: '63e07d1d3f58a207a55e9144',
                    name: 'Nhẫn bạc s925',
                    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1675763990/clc25ww6bngcxnc5kq51.png'
                },
                {
                    id: '63e07dad3f58a207a55e914b',
                    name: 'Dây chuyền bạc s925',
                    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1675763986/csl612qzoxceh02ejmpg.png'
                },
                {
                    id: '63e07e3f3f58a207a55e914f',
                    name: 'Vòng tay bạc s925',
                    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1675763992/kmjzbhcxmkmqa0ciqt7l.png'
                },
            ]
        },

        hslider2: {
            image: 'https://cdn.shopify.com/s/files/1/0644/2958/8701/files/322741831_1593005294463790_4552086314516005706_n_460x.jpg?v=1673510030',
            product: {
                id: '63e07d1d3f58a207a55e9144',
                name: 'Nhẫn bạc nam, nữ QUYMAO Ring Helios Original S925',
                price: '1150000',
                amount: 11,
                size: 'Size 6',
                title: 'Helios chính thức cho ra mắt combo mặt dây chuyền và nhẫn Quý Mão, được lấy cảm hứng từ linh vật của năm 2023. Kết hợp với chất liệu bạc S925 với sự mạnh mẽ, cứng rắn.Tất cả điều đó tạo nên một bức tranh tổng thể, sinh động và rõ ràng, giữ trọn vẹn được tinh thần truyền thống Việt Nam nhưng không mang cảm giác lạc hậu, cũ kỹ.',
                image: [
                    'https://cdn.shopify.com/s/files/1/0644/2958/8701/products/2_Custom_2_720x.jpg?v=1673431089',
                    'https://cdn.shopify.com/s/files/1/0644/2958/8701/products/1_Custom_2_720x.jpg?v=1673431089',
                    'https://cdn.shopify.com/s/files/1/0644/2958/8701/products/3_Custom_1_720x.jpg?v=1673431088'
                ]
            },
        },
        hslider3: {
            title: 'Sản phẩm nổi bật',
            item: [
                {
                    id: '63e15ada5f0555c9be1280b1',
                    name: 'NISHIKIKOI RING',
                    title: 'Theo truyền thuyết, cá Koi là hình ảnh ẩn dụ về sự quyết tâm và kiên trì bằng cách bơi ngược dòng, không ngừng di chuyển, chống chọi với dòng nước. Lấy cảm hứng từ hình tượng đó, chúng tôi xây dựng lên một tác phẩm nghệ thuật với tinh thần đề cao sự kiên trì, không ngừng cố gắng vươn lên để vượt qua bão tố.',
                    src: 'https://res.cloudinary.com/dbkgkyh4h/video/upload/v1675015207/samples/KoiRing4x5_rdt8qf.mp4'
                },
                {
                    id: "63e15b285f0555c9be1280b6",
                    name: 'THUAN THIEN NECKLACE',
                    title: 'Thuận Thiên kiếm hay còn được biết đến là thanh kiếm thần Thuận - thanh kiếm huyền thoại của vua Lê Lợi, vị anh hùng của dân tộc Việt, người đã đem lại độc lập cho Việt Nam từ ách cai trị của nhà Minh phương Bắc. Dựa vào sức mạnh ẩn chứa đó, Helios định hướng phát triển ý niệm về sức mạnh nội tại bên trong con người Việt thành một chế tác độc nhất vô nhị.',
                    src: 'https://cdn.shopify.com/videos/c/o/v/5994ac4914114e56bb2b91d606e077e1.mp4'
                },
            ]
        },
        hslider4: [
            'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1675017795/fztlnze79jyyntcxqu8c.png',
            'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1675017797/ix9eirxjprmtzjmxxc19.png',
            'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1675017798/ls3xapprchhercyhq97h.png',
            'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1675017799/vuej5xefqiaxryt7dbds.png'
        ],
        hslider5: [
            {
                name: 'Chan',
                image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1675018438/rtqxrs9hkgczb9bojav8.png'
            },
            {
                name: 'Đoàn Yến Nhi',
                image: 'https://cdn.shopify.com/s/files/1/0644/2958/8701/articles/IMG_7229_460x.jpg?v=1671520899%20460w,'
            },
            {
                name: 'Phương khác',
                image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1675018436/jxeq9s0bw4wmhwqct5c8.png'
            },
            {
                name: 'Băng nguyễn',
                image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1675018435/ln5aqgu1pxq15k9pcg0y.png'
            },
            {
                name: 'Phương trinh',
                image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674982778/r3xa70doid0x6bpt3241.jpg'
            },
            {
                name: 'Thảo nhi',
                image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674983070/jg6tkfghqlaoj48pmo5r.jpg'
            },
            {
                name: 'Huyền trần',
                image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674979650/swb8py9kagcf4wnma4jk.jpg'
            },
            {
                name: 'Hà anh',
                image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674979891/hyo8lhedzzdxprnz4397.jpg'
            },
            {
                name: 'Phương thảo',
                image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674979528/vhkfuhaxuf9ms0yozzt2.jpg'
            },
            {
                name: 'Hữu trung',
                image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674982642/shmupr4t8ka4mzziwdmy.jpg'
            },
            {
                name: 'Trần linh',
                image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980667/w0exsisknr31dmzeuhtu.jpg'
            },
        ]
    }


 


    const handleCreate = async () => {
        console.log(data)
        await axios.post('http://localhost:3505/api/home/createhome', data)
    }

    return (


    
            <div>
                <Button onClick={handleCreate}>CreateHome</Button>
            </div>
       
    )
}

export default CreateHome