import { Imobil } from './../models/imob.model';

export class Init{

    
    load(){
        if(localStorage.getItem('imob') === null || localStorage.getItem('imob') === undefined){
                console.log('sotrage empty ... creating');
        const imob: Imobil[] =[
            new Imobil(
                3,
                1,
                'Siminocului nr 2',
                50,
                5000,
                'https://s.iha.com/12900002696/Short-term-rentals-Kassel-Ferienwohnungen-Urlen_2.jpeg'
                ),
            new Imobil(
                2,
                2,
                'Traian Vuia nr 15',
                40,
                1000,
                'https://s.iha.com/12900002696/Short-term-rentals-Kassel-Ferienwohnungen-Urlen_2.jpeg'
                ),
        ];
        localStorage.setItem('imob', JSON.stringify(imob));
    }
    else{
        console.log('loading imob');
    }


    }
}