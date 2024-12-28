const getInnerTextToValue = (id) => {
    const value = document.getElementById(id).innerText;
    return parseFloat(value);
}
const getInputToValue = (id) => {
    const values = document.getElementById(id).value;
    return parseFloat(values);
}
let myTk = getInnerTextToValue('myTk').toFixed(2)
let modal = document.getElementById('my_modal_1')
const historyResultContainer = document.getElementById('historyResultContainer')
// noakhali section
const noakhaliBtn = document.getElementById('noakhaliBtn')
noakhaliBtn.addEventListener('click', () => {
    const noakhaliDonatedTk = getInnerTextToValue('noakhaliDonateTk')
    const noakhaliInputTk = getInputToValue('noakhaliInputFeild')
    if (noakhaliInputTk > myTk) {
        return alert("Sorry You don't have enough money in your account .")
    }
    if (isNaN(noakhaliInputTk) || typeof (noakhaliInputTk) === false || noakhaliInputTk <= 0) {
        return alert('Please Enter Valid Amount')
    }

    document.getElementById('noakhaliDonateTk').innerText = noakhaliInputTk + noakhaliDonatedTk
    const donateAfterBalance = myTk - noakhaliInputTk;
    document.getElementById('myTk').innerText = donateAfterBalance.toFixed(2)
    myTk = donateAfterBalance
    document.getElementById('noakhaliInputFeild').value = ''
    modal.showModal()

    const createDiv = document.createElement('div')
    createDiv.classList.add('shadow-lg', 'border', 'p-4', 'rounded-xl', 'space-y-2')
    const now = new Date();
    createDiv.innerHTML = `
<p class="font-bold text-xl">${noakhaliInputTk} Tk is Donate for Flood at Noakhali, Bangladesh</p>
<p>Date : ${now}</p>
    `
    historyResultContainer.prepend(createDiv)
})

// feni section 
const feniBtn = document.getElementById('feniBtn')
feniBtn.addEventListener('click', () => {
    const feniDonateTk = getInnerTextToValue('feniDonateTk')
    const feniInputFeild = getInputToValue('feniInputFeild')
    if (feniInputFeild > myTk) {
        return alert("Sorry You don't have enough money in your account.Please Add Money first...")
    }
    if (isNaN(feniInputFeild) || typeof (feniInputFeild) === false || feniInputFeild <= 0) {
        return alert('Please Enter Valid Amount')
    }

    document.getElementById('feniDonateTk').innerText = feniInputFeild + feniDonateTk
    const donateAfterBalance = myTk - feniInputFeild;
    document.getElementById('myTk').innerText = donateAfterBalance.toFixed(2)
    myTk = donateAfterBalance
    document.getElementById('feniInputFeild').value = ''
    modal.showModal()

    const createDiv = document.createElement('div')
    createDiv.classList.add('shadow-lg', 'border', 'p-4', 'rounded-xl', 'space-y-2')
    const now = new Date();
    createDiv.innerHTML = `
<p class="font-bold text-xl">${feniInputFeild} Tk is Donate for Flood Relief in Feni,Bangladesh</p>
<p>Date : ${now}</p>
    `
    historyResultContainer.prepend(createDiv)
})

// protest section
const protestBtn = document.getElementById('protestBtn')
protestBtn.addEventListener('click', () => {
    const protestDonationTk = getInnerTextToValue('protestDonationTk')
    const protestInputFeild = getInputToValue('protestInputFeild')
    if (protestInputFeild > myTk) {
        return alert("Sorry You don't have enough money in your account.Please Add Money first...")
    }
    if (isNaN(protestInputFeild) || typeof (protestInputFeild) === false || protestInputFeild <= 0) {
        return alert('Please Enter Valid Amount')
    }

    document.getElementById('protestDonationTk').innerText = protestInputFeild + protestDonationTk
    const donateAfterBalance = myTk - protestInputFeild;
    document.getElementById('myTk').innerText = donateAfterBalance.toFixed(2)
    myTk = donateAfterBalance
    document.getElementById('protestInputFeild').value = ''
    modal.showModal()

    const createDiv = document.createElement('div')
    createDiv.classList.add('shadow-lg', 'border', 'p-4', 'rounded-xl', 'space-y-2')
    const now = new Date();
    createDiv.innerHTML = `
<p class="font-bold text-xl">${protestInputFeild} Tk is Aid for Injured in the Quota Movement</p>
<p>Date : ${now}</p>
    `
    historyResultContainer.prepend(createDiv)
})

// toggle and switch option donation and history button
const mainSection = document.getElementById('mainSection')
const histroySeaction = document.getElementById('histroySeaction')
const donationBtn = document.getElementById('donationBtn')
const histroyBtn = document.getElementById('histroyBtn')



histroyBtn.addEventListener('click', () => {
    mainSection.classList.add('hidden')
    histroySeaction.classList.remove('hidden')

    histroyBtn.classList.add('bg-[#B4F461]', 'text-black')
    donationBtn.classList.remove('bg-[#B4F461]', 'text-black')

})
donationBtn.addEventListener('click', () => {
    histroySeaction.classList.add('hidden')
    mainSection.classList.remove('hidden')

    donationBtn.classList.add('bg-[#B4F461]', 'text-black')
    histroyBtn.classList.remove('bg-[#B4F461]', 'text-black')
})