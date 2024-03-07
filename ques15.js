// Question No # 15
var GuestList = ["Sana", "Maha", "Noor"];
var GuestNotCome = GuestList[0];
console.log(GuestNotCome, "me nai a sakta");
GuestList.splice(0, 0, "Neha");
GuestList.forEach(function (Guest) { return console.log("Respected madam ".concat(Guest, ",You are invited for dinner?")); });
