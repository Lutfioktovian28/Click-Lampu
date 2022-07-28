 class modul{

        constructor(lampu = '', switc = '', label = ''){
            this.lampu = lampu
            this.switc = switc
            this.label = label
        }

        shortLampuON(a) {
            return  a.src = 'assets/lampuon.gif'
        }
        shortLampuOFF(a) {
             return a.src = 'assets/lampuoff.gif'
        }
         shortSwitchOn(a){
            return a.checked = true
            
        }
        shortSwitchOff(a){
            return a.checked = false
            
        }
        shortLabelON(a){
            return a.innerHTML = 'lampu ON'
        }
        shortLabelOOF(a) {
            return a.innerHTML = 'lampu OFF'
        }

       
    }