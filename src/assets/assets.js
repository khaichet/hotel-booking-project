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
        "hotel": "1",
        "pricePerNight": 100,
        "amenities": ["Spa", "Room Service"],
        "image": [],
        "isAvailable": true,
    }
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