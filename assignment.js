// Kilometer To Meter Converter (Problem-1)
    // 1 kilometer = 1000 meter.
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Distance cannot be negative";
    }
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(15.5);
console.log(result);


// Budget Calculator (Problem-2)
    // per clock = 50tk
    // per phone = 100tk
    // per laptop = 500tk
function budgetCalculator(clock, phone, laptop) {
    if (clock < 0 || phone < 0 || laptop < 0) {
        return "Quantity cannot be negative";
    }
    var clockPrice = clock * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var total = clockPrice + phonePrice + laptopPrice;
    return total;
}
var result2 = budgetCalculator(5, 2, 3);
console.log(result2);


// Hotel Cost (Problem-3)
    // 100tk/day for 1-10days
    // 80tk/day for 11-20days
    // 50tk/day for 20+days
function hotelCost(days) {
    var cost = 0;
    if (days < 0) {
        return "Days cannot be negative";
    }
    else if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var result3 = hotelCost(25);
console.log(result3);


// Find Mega Friend (Problem-4)
function megaFriend(friends) {
    if (friends.length == 0) {
        return "Please enter friends name list."
    }
    var mega = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
var friends = ["Sojib", "Saiful", "Arif"];
var result4 = megaFriend(friends);
console.log(result4);