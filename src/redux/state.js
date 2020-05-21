import React from 'react';


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likes: 9},
            {id: 2, message: 'It\'s my first post', likes: 12},
            {id: 3, message: 'Its really your first project?', likes: 7},
            {id: 4, message: 'Yes, of course', likes: 25}
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Bessonniy11', img:<img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4N8MmlTqVNcvF69NxZxA8-IAuIM-dBFgdnik-ZK3hKWCK-mg&s"
                    alt=""/>},
            {id: 2, name: 'Nikolay', img:<img
                    src="https://i.pinimg.com/originals/9f/f9/12/9ff912d0bd2a5d432e41c6126d688180.png"
                    alt=""/>},
            {id: 3, name: 'Tatyana', img:<img
                    src="https://avatars.mds.yandex.net/get-zen_doc/44972/pub_5be0025c48efa800a9d32c88_5be003f9b54c0700aa9bb018/scale_1200"
                    alt=""/>},
            {id: 4, name: 'Sveta', img:<img
                    src="https://avatars.mds.yandex.net/get-zen_doc/195350/pub_5cf37b2d0e1d9b00b010cbc9_5cf37b9da68d9100af4b7923/scale_1200"
                    alt=""/>},
            {id: 5, name: 'Oleg', img:<img
                    src="https://c.wallhere.com/photos/db/26/Dalai_Lama_Buddhism_men_portrait_display_monochrome_face_portrait_glasses-50537.png!d"
                    alt=""/>},
        ],
        messages: [
            {id: 1, textMessage: 'Hello, people!', img:<img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4N8MmlTqVNcvF69NxZxA8-IAuIM-dBFgdnik-ZK3hKWCK-mg&s"
                    alt=""/>},
            {id: 2, textMessage: 'Hello, Bessonniy11!', img:<img
                    src="https://avatars.mds.yandex.net/get-zen_doc/44972/pub_5be0025c48efa800a9d32c88_5be003f9b54c0700aa9bb018/scale_1200"
                    alt=""/>},
            {id: 3, textMessage: 'How are your?', img:<img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4N8MmlTqVNcvF69NxZxA8-IAuIM-dBFgdnik-ZK3hKWCK-mg&s"
                    alt=""/>},
            {id: 4, textMessage: 'Thinks, I very good!', img:<img
                    src="https://avatars.mds.yandex.net/get-zen_doc/44972/pub_5be0025c48efa800a9d32c88_5be003f9b54c0700aa9bb018/scale_1200"
                    alt=""/>},
        ]
    }
}

export default state;