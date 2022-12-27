var reasons=[
"1. They give oxygen",
"2. They are habitats for many animals ",
"3. They can be beautiful",
"4. They cool our streets and cities"
]
var imgs=[
"https://images.unsplash.com/photo-1459524472745-8aa28d2d2a6b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY1MTAxNjU0OA&ixlib=rb-1.2.1&q=85",
"https://images.unsplash.com/photo-1446483050676-bd2fdf3ac2d6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY1MTAxNjU0OA&ixlib=rb-1.2.1&q=85",
"https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY1MTAxNjU0OA&ixlib=rb-1.2.1&q=85",
"https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY1MTAxNjU0OA&ixlib=rb-1.2.1&q=85"
]
var i=0
function NextSlide(){
document.getElementById("reason1").innerHTML=reasons[i]
document.getElementById("img1").src=imgs[i]
i++
}

