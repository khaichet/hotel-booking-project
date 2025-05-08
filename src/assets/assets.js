import family from "./family.jpg"
import food from "./food.jpg"
import romantic from "./romantic.webp"
import sea from "./sea.webp"
import clothes from "./clothes.png"
import gym from "./treadmill_2382633.png"
import breakfast from "./breakfast.png"
import parking from "./parking.png"
import roomService from "./food-serving.png"
import laundry from "./facial.png"
import swimmingPool from "./swimming-pool.png"
import logo from "./logo.png"
import HeroImage from "./slider2.png"
import langman1 from "./langman1.jpg"
import langman2 from "./langman2.png"
import langman3 from "./langmang3.png"
import hoangda1 from "./hoangda2.jpg"
import hoangda2 from "./hoangda3.jpg"
import hoangda4 from "./hoangda4.jpg"
import sangtrong1 from "./sangtrong1.png"
import sangtrong2 from "./sangtrong2.png"

export const cities = [
    "Hà Nội",
    "Hồ Chí Minh",
    "Đà Nẵng",
    "Nha Trang",
    "Hải Phòng",
]

export const assets = {
    HeroImage,
    logo,
    family,
    food,
    romantic,
    sea,
    clothes,
    gym,
    breakfast,
    parking,
    roomService,
    laundry,
    swimmingPool
}
export const exclusiveOffers = [
    {
        _id: 1,
        title: "Giải nhiệt Hè",
        description: "Tận hưởng đêm nghỉ miễn phí và bữa sáng hàng ngày ",
        image: sea,
        priceOff: 20,
        expiryDate: "Aug 31"
    },
    {
        _id: 2,
        title: "Nghỉ dưỡng lãng mạng",
        description: "Tân hưởng dịch vụ spa chuyên nghiệp cho các cặp đôi",
        image: romantic,
        priceOff: 25,
        expiryDate: "June 31"
    },
    {
        _id: 3,
        title: "Kỳ nghỉ gia đình",
        description: "Miễn phí vé vào cửa khu vui chơi cho trẻ em",
        image: family,
        priceOff: 15,
        expiryDate: "Aug 31"
    },
    {
        _id: 4,
        title: "Trải nghiệm ẩm thực",
        description: "Tặng voucher buffet tối khi đặt phòng 2 đêm liên tiếp",
        image: food,
        priceOff: 18,
        expiryDate: "Sep 10"
    }
]

export const testimonials = [
    {
        _id: 1,
        name: "Nguyễn Văn A",
        image: "https://randomuser.me/api/portraits",
        review: "Khách sạn rất đẹp và dịch vụ tuyệt vời. Tôi đã có một kỳ nghỉ tuyệt vời tại đây.",
        rating: 5
    },
    {
        _id: 2,
        name: "Trần Thị B",
        image: "https://randomuser.me/api/portraits",
        review: "Nhân viên rất thân thiện và nhiệt tình. Tôi sẽ quay lại lần sau.",
        rating: 4
    },
    {
        _id: 3,
        name: "Lê Văn C",
        image: "https://randomuser.me/api/portraits",
        review: "Phòng sạch sẽ và tiện nghi. Tôi rất hài lòng với dịch vụ.",
        rating: 4.5
    },
    {
        _id: 4,
        name: "Phạm Thị D",
        image: "https://randomuser.me/api/portraits",
        review: "Địa điểm tuyệt vời, gần biển và các điểm tham quan. Tôi rất thích.",
        rating: 5
    }]

export const facilities = {
    "Swimming Pool": assets.swimmingPool,
    "Spa": assets.facial,
    "Gym": assets.gym,
    "Breakfast": assets.breakfast,
    "Parking": assets.parking,
    "Room Service": assets.roomService,
    "Laundry": assets.laundry,

}

export const roomCommonData = [
    {

        title: "Clean & Safe",
        description: "Khách sạn của chúng tôi tuân thủ các tiêu chuẩn vệ sinh và an toàn cao nhất để đảm bảo sự an tâm cho khách hàng.",


    }
]

export const hotelDummyData = {
    "_id": "1",
    "name": "Khách sạn ABC",
    "address": "Hang Gai, Hoàn Kiếm, Hà Nội",
    "contact": "0123456789",
    "description": "Khách sạn ABC là một trong những khách sạn hàng đầu tại Hà Nội, cung cấp dịch vụ lưu trú chất lượng cao và tiện nghi hiện đại.",
    "rating": 4.5,
    "city": "Hà Nội",
    "owner": "user_1"
}

export const roomDummyData = [
    {
        "_id": "1",

        "name": "Phòng Deluxe",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 100,
        "amenities": ["Spa", "Room Service"],
        "images": [sangtrong1, sangtrong2],
        "description": "Phòng Deluxe với thiết kế sang trọng và tiện nghi hiện đại, phù hợp cho các cặp đôi hoặc gia đình.",
        "isAvailable": true,
    },
    {
        "_id": "2",
        "name": "Phòng Superior",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 80,
        "amenities": ["Gym", "Breakfast"],
        "images": [hoangda1, hoangda2, hoangda4],
        "description": "Phòng Superior với không gian thoải mái và đầy đủ tiện nghi, lý tưởng cho chuyến công tác hoặc nghỉ dưỡng.",
        "isAvailable": true,
    },
    {
        "_id": "3",
        "name": "Phòng Standard",
        "hotel": hotelDummyData,
        "roomType": "Single Bed",
        "pricePerNight": 60,
        "amenities": ["Parking", "Laundry"],
        "images": [langman1, langman2, langman3],
        "description": "Phòng Standard với giá cả phải chăng và dịch vụ tốt nhất, phù hợp cho những ai muốn tiết kiệm chi phí.",
        "isAvailable": true,
    },
    {
        "_id": "3",
        "name": "Phòng Standard",
        "hotel": hotelDummyData,
        "roomType": "Single Bed",
        "pricePerNight": 60,
        "amenities": ["Parking", "Laundry"],
        "images": [langman1, langman2, langman3],
        "description": "Phòng Standard với giá cả phải chăng và dịch vụ tốt nhất, phù hợp cho những ai muốn tiết kiệm chi phí.",
        "isAvailable": true,
    },
]

export const userDummyData = {
    "_id": "user_1",
    "username": "Nguyễn Văn A",
    "email": "user@demo.com",
    "image": "https://randomuser.me/api/portraits",
    "phone": "0123456789",
    "role": "hotelOwner",
    "recentSearcheCities": ["Hà Nội"],
}
export const userBookingsDummyData = [
    {
        "_id": "1",
        "userId": userDummyData,
        "room": roomDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": "2025-08-01",
        "checkOutDate": "2025-08-05",
        "totalPrice": 500,
        "guests": 2,
        "status": "pending",
        "paymentMethod": "creditCard",
        "isPaid": true,
    }
]