import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './userform.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSubmit(value: any) {
    console.log(value);
  }

  public cities = [{Id:1, Name:"Ha Noi"},{Id:2, Name:"Da Nang"},{Id:3, Name:"Sai Gon"}];
  public cityName = ["Bà Rịa","Bạc Liêu","Bảo Lộc","Bắc Giang","Bắc Kạn","Bắc Ninh","Bến Tre","Biên Hòa","Buôn Ma Thuột","Cà Mau","Cam Ranh","Cao Bằng","Cao Lãnh","Cẩm Phả","Cần Thơ","Châu Đốc","Đà Lạt","Đà Nẵng","Điện Biên Phủ","Đông Hà","Đồng Hới","Hà Giang","Hạ Long","Hà Nội","Hà Tĩnh","Hải Dương","Hải Phòng","Hòa Bình","Hồ Chí Minh City","Hội An","Huế","Hưng Yên","Kon Tum","Lai Châu","Lạng Sơn","Lào Cai","Long Xuyên","Móng Cái","Mỹ Tho","Nam Định","Nha Trang","Ninh Bình","Phan Rang","Phan Thiết","Phủ Lý","Pleiku","Quảng Ngãi","Quy Nhơn","Rạch Giá","Sa Đéc","Sầm Sơn","Sóc Trăng","Sông Công","Sơn La","Tam Điệp","Tam Kỳ","Tân An","Tây Ninh","Thái Bình","Thái Nguyên","Thanh Hóa","Thủ Dầu Một","Trà Vinh","Tuy Hòa","Tuyên Quang","Uông Bí","Vị Thanh","Việt Trì","Vinh","Vĩnh Long","Vĩnh Yên","Vũng Tàu","Yên Bái"];
  // printCities() {
  //   var someArray = ["Bà Rịa","Bạc Liêu","Bảo Lộc","Bắc Giang","Bắc Kạn","Bắc Ninh","Bến Tre","Biên Hòa","Buôn Ma Thuột","Cà Mau","Cam Ranh","Cao Bằng","Cao Lãnh","Cẩm Phả","Cần Thơ","Châu Đốc","Đà Lạt","Đà Nẵng","Điện Biên Phủ","Đông Hà","Đồng Hới","Hà Giang","Hạ Long","Hà Nội","Hà Tĩnh","Hải Dương","Hải Phòng","Hòa Bình","Hồ Chí Minh City","Hội An","Huế","Hưng Yên","Kon Tum","Lai Châu","Lạng Sơn","Lào Cai","Long Xuyên","Móng Cái","Mỹ Tho","Nam Định","Nha Trang","Ninh Bình","Phan Rang","Phan Thiết","Phủ Lý","Pleiku","Quảng Ngãi","Quy Nhơn","Rạch Giá","Sa Đéc","Sầm Sơn","Sóc Trăng","Sông Công","Sơn La","Tam Điệp","Tam Kỳ","Tân An","Tây Ninh","Thái Bình","Thái Nguyên","Thanh Hóa","Thủ Dầu Một","Trà Vinh","Tuy Hòa","Tuyên Quang","Uông Bí","Vị Thanh","Việt Trì","Vinh","Vĩnh Long","Vĩnh Yên","Vũng Tàu","Yên Bái"];
  //   for (var i = 0; i < someArray.length; i++) {
  //       console.log(i,someArray[i]);
  //   } 
  // };
}
