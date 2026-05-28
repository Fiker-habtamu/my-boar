let btn = $("#submit")
let amount = $("#Amount")
let Raccount= $("#RA")
let Rname = $("#RN")
let bankN = $("#BN")
let forLocalStor = (amount,rAcc,rName,bankName)=>{
	const allINfo = {
		amount:amount,
		rAcc:rAcc,
		rName:rName,
		bankName:bankName,
	}
	localStorage.setItem("info",JSON.stringify(allINfo))
	let hi =  JSON.parse(localStorage.getItem("info"))
}

btn.on("click",function(e){
	// e.preventDefault()
	let amountVal = amount.val()
	let RaccountVal= Raccount.val()
	let RnameVal = Rname.val()
	let bankNVal = bankN.val()
	forLocalStor(amountVal,RaccountVal,RnameVal,bankNVal)
})

/**     use for the next page  */

let disAmount = $("#disAmount")

let firstSpan = $(".firstSpan")
let secondSpain = $(".secondSpan")
let disRecName = $("#disRecName")
let disBank = $("#disBank")

let recInfo = JSON.parse(localStorage.getItem('info')).amount
let fDidgitAcc = JSON.parse(localStorage.getItem('info')).rAcc
let sDigitAcc = JSON.parse(localStorage.getItem('info')).rAcc
let disRecNameInfo = JSON.parse(localStorage.getItem('info')).rName
let disBankInfo =  JSON.parse(localStorage.getItem('info')).bankName

let disAmountVal = disAmount.text(recInfo)
let firstSpanVal = firstSpan.text(fDidgitAcc[0])
let secondSpainVal = secondSpain.text(sDigitAcc.slice(-3))
disRecName.text(disRecNameInfo.toUpperCase())
disBank.text(disBankInfo.toUpperCase())
localStorage.clear()

let date =new Date();

let day = $("#day")
let month = $("#month")
let year = $("#year")
let hour = $("#hour")
let min = $("#min")
let sec = $("#sec")

day.text(date.getDay())
month.text(date.getMonth())
year.text(date.getFullYear())
hour.text(date.getHours())
min.text(date.getMinutes())
sec.text(date.getSeconds())


console.log(date.getFullYear())