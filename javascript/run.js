class run extends modul{
            constructor(params){
                super(params)
               
            }


            running(a){
                if(switc[a].id === 'group-switc1'){
                    switc[a].addEventListener('click', function (e) {
                        for(let i = 0; i < 4; i++){
                            if (e.target.checked === true) {
                                new modul().shortLampuON(lampu[i])
                                new modul().shortLabelON(label[i])
                                new modul().shortSwitchOn(switc[i])
                                new modul().shortSwitchOn(switc[a])
                                new modul().shortLabelON(label[10])

                            } else {
                                new modul().shortLampuOFF(lampu[i])
                                new modul().shortLabelOOF(label[i])
                                new modul().shortSwitchOff(switc[i])
                                new modul().shortSwitchOff(switc[a])
                                new modul().shortLabelOOF(label[10])

                            }
                            
                        }

                    })      
                }else if(switc[a].id === 'group-switc2'){
                    for(let i = 4; i < 7; i++){
                        switc[a].addEventListener('click', function (e) {
                            if (e.target.checked === true) {
                                new modul().shortLampuON(lampu[i])
                                new modul().shortLabelON(label[i])
                                new modul().shortSwitchOn(switc[i])
                                new modul().shortSwitchOn(switc[a])
                                new modul().shortLabelON(label[11])


                            } else {
                                new modul().shortLampuOFF(lampu[i])
                                new modul().shortLabelOOF(label[i])
                                new modul().shortSwitchOff(switc[i])
                                new modul().shortSwitchOff(switc[a])
                                new modul().shortLabelON(label[11])
                            }

                        })
                    }
                }else if(switc[a].id === 'group-switc3'){
                    for(let i = 7; i < 9; i++){
                        switc[a].addEventListener('click', function (e) {
                            if (e.target.checked === true) {
                                new modul().shortLampuON(lampu[i])
                                new modul().shortLabelON(label[i])
                                new modul().shortSwitchOn(switc[i])
                                new modul().shortSwitchOn(switc[a])
                                new modul().shortLabelON(label[12])

                            } else {
                                new modul().shortLampuOFF(lampu[i])
                                new modul().shortLabelOOF(label[i])
                                new modul().shortSwitchOff(switc[i])
                                new modul().shortSwitchOff(switc[a])
                                new modul().shortLabelON(label[12])
                            }

                        })
                    }
                }else if(switc[a].id === 'group-switc4'){
                    // console.log(switc[a].id)
                    for(let i = 9; i < 10; i++){
                        switc[a].addEventListener('click', function (e) {
                            if (e.target.checked === true) {
                                new modul().shortLampuON(lampu[i])
                                new modul().shortLabelON(label[i])
                                new modul().shortSwitchOn(switc[i])
                                new modul().shortSwitchOn(switc[a])
                                new modul().shortLabelON(label[13])

                            } else {
                                new modul().shortLampuOFF(lampu[i])
                                new modul().shortLabelOOF(label[i])
                                new modul().shortSwitchOff(switc[i])
                                new modul().shortSwitchOff(switc[a])
                                new modul().shortLabelON(label[13])
                            }

                        })
                    }
                }else{
                    switc[a].addEventListener('click', function (e) {
                        if (e.target.checked === true) {
                            new modul().shortLampuON(lampu[a])
                            new modul().shortLabelON(label[a])
                        } else {
                            new modul().shortLampuOFF(lampu[a])
                            new modul().shortLabelOOF(label[a])
                        }
                    })
                }
               
            }

        
}




// class run{
//             constructor(params){
//                 // super(params)
//                 // console.log(params)
//                  document.getElementById(`${params.switc}`).addEventListener('click', function (e) {
//                     if (e.target.checked === true) {
//                         params.shortLampuON()
//                         params.shortLabelON()
//                     } else {
//                         params.shortLampuOFF()
//                         params.shortLabelOOF()
//                     }
//                 })
//             }
//             running(){
//                 console.log(switc)
//                 // document.getElementById(`${switc}`).addEventListener('click', function (e) {
//                 //     if (e.target.checked === true) {
//                 //         params.shortLampuON()
//                 //         params.shortLabelON()
//                 //     } else {
//                 //         params.shortLampuOFF()
//                 //         params.shortLabelOOF()
//                 //     }
//                 // })
//             }
// }