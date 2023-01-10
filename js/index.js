let cartoes = window.document.querySelectorAll(".cartoes")

function cartoesS(num, fotografia, descricao) {
	if(num<cartoes.length){
		cartoes[num].innerHTML+=`
			<div class=fCartao">
				<div class=fts>
					<img src=${fotografia} alt=fotos>
				</div>
				<div class=fDescricao>
					${descricao}
				</div>
			</div>
		`
	}
}

/*As fotos e suas descrições*/
/*Dirigentes*/
let dFotos = [
	`./imgs/fotografias/dirigentes/df1.jpg`,
	`./imgs/fotografias/dirigentes/df2.jpg`
]

let dDescricao =[
	`foto do pai`,
	`foto do pai`
]

for(let i=0; i<dFotos.length; i++){
	cartoesS(0, dFotos[i], dDescricao[i])
}
/*--------------------------------------------------*/
/*maes*/
let mFotos = [
	`./imgs/fotografias/maes/mf1.jpg`
]

let mDescricao =[
	`foto das  mães`
]

for(let i=0; i<mFotos.length; i++){
	cartoesS(1, mFotos[i], mDescricao[i])
}
/*--------------------------------------------------*/
/*pais*/
let pFotos = [
	`./imgs/fotografias/pais/pf1.jpg`
]

let pDescricao =[
	`foto dos pais`
]

for(let i=0; i<pFotos.length; i++){
	cartoesS(2, pFotos[i], pDescricao[i])
}
/*--------------------------------------------------*/
/*jovens*/
let jFotos = [
	`./imgs/fotografias/jovens/jf1.jpg`
]

let jDescricao =[
	`foto dos jovens`
]

for(let i=0; i<jFotos.length; i++){
	cartoesS(3, jFotos[i], jDescricao[i])
}
/*--------------------------------------------------*/
/*outros*/
let oFotos = [
	`./imgs/fotografias/outros/of1.jpg`
]

let oDescricao =[
	`foto dos jovens`
]

for(let i=0; i<oFotos.length; i++){
	cartoesS(4, oFotos[i], oDescricao[i])
}
/*--------------------------------------------------*/
/*----------------------------------------------------------*/

let cartoesV = window.document.querySelectorAll(".cartoesV")

function cartoesSV(num, video, descricao) {
	if(num<cartoes.length){
		cartoesV[num].innerHTML+=`
			<div class=vCartao">
				<div class=vds>
					<video src=${video} autoplay=false controls poster=./imgs/capa/capa.png></video>
				</div>
				<div class=vDescricao>
					${descricao}
				</div>
			</div>
		`
	}
}

/*Os vidoes e suas descrições*/
/*Pregacoes*/
let pVideos = [
	`./videos/teste.mp4`
]

let pVideosDescricao =[
	`ITED`
]

for(let i=0; i<pVideos.length; i++){
	cartoesSV(0, pVideos[i], pVideosDescricao[i])
}
/*--------------------------------------------------*/
/*testemunhos*/
let tVideos = [
	`./videos/teste.mp4`
]

let tVideosDescricao =[
	`ITED`
]

for(let i=0; i<tVideos.length; i++){
	cartoesSV(1, tVideos[i], tVideosDescricao[i])
}
/*--------------------------------------------------*/
/*apresentações dos jovens*/
let aJVideos = [
	`./videos/teste.mp4`
]

let aJVideosDescricao =[
	`ITED`
]

for(let i=0; i<aJVideos.length; i++){
	cartoesSV(2, aJVideos[i], aJVideosDescricao[i])
}
/*--------------------------------------------------*/
/*apresentações das mães*/
let aMVideos = [
	`./videos/teste.mp4`
]

let aMVideosDescricao =[
	`ITED`
]

for(let i=0; i<aMVideos.length; i++){
	cartoesSV(3, aMVideos[i], aMVideosDescricao[i])
}
/*--------------------------------------------------*/
/*outros*/
let oVideos = [
	`./videos/teste.mp4`
]

let oVideosDescricao =[
	`ITED`
]

for(let i=0; i<oVideos.length; i++){
	cartoesSV(4, oVideos[i], oVideosDescricao[i])
}
/*--------------------------------------------------*/
/*----------------------------------------------------------*/
