function ertekel(){
    var pontszam = 0
    if(document.kviz.kerdes0.value == "b"){
        pontszam++
    }
    if(document.kviz.kerdes1.value == "b"){
        pontszam++
    }
    if(document.kviz.kerdes2.value == "b"){
        pontszam++
    }
    if(document.kviz.kerdes3.value == "c"){
        pontszam++
    }
    if(document.kviz.kerdes4.value == "c"){
        pontszam++
    }
    if(document.kviz.kerdes5.value == "b"){
        pontszam++
    }
    if(document.kviz.kerdes6.value == "c"){
        pontszam++
    }
    if(document.kviz.kerdes7.value == "c"){
        pontszam++
    }
    if(document.kviz.kerdes8.value == "b"){
        pontszam++
    }
    if(document.kviz.kerdes9.value == "b"){
        pontszam++
    }
     if(document.kviz.kerdes10.value == "a"){
        pontszam++
    }
     if(document.kviz.kerdes11.value == "b"){
        pontszam++
    }
     if(document.kviz.kerdes12.value == "c"){
        pontszam++
    }
     if(document.kviz.kerdes13.value == "b"){
        pontszam++
    }
     if(document.kviz.kerdes14.value == "c"){
        pontszam++
    }
    alert("Az eredmény: 15/" +pontszam)
}