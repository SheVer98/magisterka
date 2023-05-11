import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {




  // Funkcje przynależności dla zmiennej "cena"
 niskaCena(x:number) {
    if (x >= 0 && x <= 10000) {
      return 1;
    } else if (x > 10000 && x < 17000) {
      return (17000 - x) / 7000;
    } else {
      return 0;
    }
  }

sredniaCena(x:number) {
    if (x >= 5000 && x <= 25000) {
      return (x - 5000) / 20000;
    } else if (x > 25000 && x < 45000) {
      return (45000 - x) / 20000;
    } else {
      return 0;
    }
  }


wysokaCena(x:number) {
    if (x >= 30000 && x <= 50000) {
      return (x - 30000) / 20000;
    } else if (x > 50000 && x < 70000) {
      return (70000 - x) / 20000;
    } else {
      return 0;
    }
  }

bardzowysokaCena(x:number) {
    if (x >= 55000 && x <= 75000) {
      return (x - 55000) / 20000;
    } else if (x > 75000) {
      return 1;
    } else {
      return 0;
    }
  }




  // Funkcje przynależności dla zmiennej "moc"
slabaMoc(x:number) {
    if (x >= 0 && x <= 80) {
      return 1;
    } else if (x > 80 && x < 130) {
      return (130 - x) / 50;
    } else {
      return 0;
    }
  }

sredniaMoc(x:number) {
    if (x >= 80 && x <= 140) {
      return (x - 80) / 60;
    } else if (x > 140 && x < 200) {
      return (200 - x) / 60;
    } else {
      return 0;
    }
  }

wysokaMoc(x:number) {
    if (x >= 150 && x <= 210) {
      return (x - 150) / 60;
    } else if (x > 210) {
      return 1;
    } else {
      return 0;
    }
  }

  // Funkcje przynależności dla zmiennej "pojemność"
malaPojemnosc(x:number) {
    if (x >= 0 && x <= 1200) {
      return 1;
    } else if (x > 1200 && x < 2200) {
      return (2200 - x) / 1000;
    } else {
      return 0;
    }
  }


duzaPojemnosc(x:number) {
    if (x >= 1400 && x <= 2400) {
      return (x - 1400) / 1000;
    } else if (x > 2400) {
      return 1;
    } else {
      return 0;
    }
  }


  // Funkcje przynależności dla zmiennej "przebieg"
niskiPrzebieg(x:number) {
    if (x >= 0 && x <= 100) {
      return 1;
    } else if (x > 100 && x < 180) {
      return (180 - x) / 80;
    } else {
      return 0;
    }
  }

sredniPrzebieg(x:number) {
    if (x >= 130 && x <= 180) {
      return (x - 130) / 50;
    } else if (x > 180 && x < 230) {
      return (230 - x) / 50;
    } else {
      return 0;
    }
  }

wysokiPrzebieg(x:number) {
    if (x >= 200 && x <= 250) {
      return (x - 200) / 50;
    } else if (x > 250) {
      return 1;
    } else {
      return 0;
    }
  }

niskaCena1(x:number) {
    if (x >= 0 && x <= 10) {
      return 1;
    } else if (x > 10 && x < 17) {
      return (17 - x) / 7;
    } else {
      return 0;
    }
  }

sredniaCena1(x:number) {
    if (x >= 5 && x <= 25) {
      return (x - 5) / 20;
    } else if (x > 25 && x < 45) {
      return (45 - x) / 20;
    } else {
      return 0;
    }
  }


wysokaCena1(x:number) {
    if (x >= 30 && x <= 50) {
      return (x - 30) / 20;
    } else if (x > 50 && x < 70) {
      return (70 - x) / 20;
    } else {
      return 0;
    }
  }

bardzowysokaCena1(x:number) {
    if (x >= 55 && x <= 75) {
      return (x - 55) / 20;
    } else if (x > 75) {
      return 1;
    } else {
      return 0;
    }
  }

niskaOcena(x:number) {
    if (x >= 0 && x <= 25) {
      return (x - 0) / 25;
    } else if (x > 25 && x < 50) {
      return (50 - x) / 25;
    } else {
      return 0;
    }
  }

 sredniaOcena(x:number) {
    if (x >= 25 && x <= 50) {
      return (x - 25) / 25;
    } else if (x > 50 && x < 75) {
      return (75 - x) / 25;
    } else {
      return 0;
    }
  }

wysokaOcena(x:number) {
    if (x >= 50 && x <= 75) {
      return (x - 50) / 25;
    } else if (x > 75 && x < 100) {
      return (100 - x) / 25;
    } else {
      return 0;
    }
  }



 niskaOcena1(x:number) {
  if (x >= 0 && x <= 25) {
    return 1;
  } else if (x > 25 && x < 50) {
    return (50 - x) / 25;
  } else {
    return 0;
  }
}

sredniaOcena1(x:number) {
  if (x >= 25 && x <= 50) {
    return (x - 25) / 25;
  } else if (x > 50 && x < 75) {
    return (75 - x) / 25;
  } else {
    return 0;
  }
}

wysokaOcena1(x:number) {
  if (x >= 50 && x <= 75) {
    return (x - 50) / 25;
  } else if (x > 75) {
    return 1;
  } else {
    return 0;
  }
}



  constructor() { }
}
