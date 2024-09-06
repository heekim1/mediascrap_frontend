


const channels = [
    {
        _id: "1",
        youtuber: "T0Series",
        subscribers: 1450000,
        category: {_id : 1, name: "Music"},
        views: 1000000,
        liked: true
    },
    {
        _id: "2",
        youtuber: "Cocomelon - Nursery Rhymes	",
        subscribers: 1000000,
        category: {_id : 2, name: "Education"},
        views: 133333,
    },
    {
        _id: "3",
        youtuber: "SET India 1",
        subscribers: 5500000,
        category: {_id : 3, name: "Show"},
        views: 11333,
    },
    {
        _id: "4",
        youtuber: "SET India 2",
        subscribers: 7000000,
        category: {_id : 3, name: "Show"},
        views: 9333,
    },
    {
        _id: "5",
        youtuber: "SET India 3",
        subscribers: 6500000,
        category: {_id : 3, name: "Show"},
        views: 32333,
    }
]

export function getChannels() {
    return channels
}

export function getChannel(id) {
    return channels.find(c => c._id === id);
}

export function saveChannel(channel) {
    let channelInDB = channels.find(c => c._id === channel._id) || {};
    
    if (!channelInDB._id) {

    }

}

export function getCategories() {
    return [
        {_id:1, name: 'Music'},
        {_id:2, name:'Education'},
        {_id:3, name:'Show'}
    ]
}