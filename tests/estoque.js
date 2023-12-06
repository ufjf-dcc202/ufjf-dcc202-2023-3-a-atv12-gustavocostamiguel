let estoque = {
'joao': [{tipo: "maca",qtd:1 },
{tipo: "pera",qtd:1 }
],
 'maria': [{tipo : "maca",qtd: 2},
{tipo: "banana",qtd:4 }
]
};

export function getEstoque(){
return structuredClone (estoque);

}
//import {getEstoque}