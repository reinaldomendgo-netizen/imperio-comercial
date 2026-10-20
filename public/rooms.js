// Modelo de navegación, separado del arte visual.
// Coordenadas de casillas y alturas lógicas. El atlas artístico se incorporará por capas.
export const ROOMS = Object.freeze({
  alto_mando:{id:'alto_mando',title:'Salón del Alto Mando',subtitle:'Dirección · Estrategia · Resultados',width:20,height:17,theme:'imperial',agents:['director','cornell','cierres','coach','meta'],portals:[
    {id:'panama',x:5,y:15,target:'panama',label:'🇵🇦 Panamá'},
    {id:'colombia',x:10,y:15,target:'colombia',label:'🇨🇴 Colombia'},
    {id:'venezuela',x:15,y:15,target:'venezuela',label:'🇻🇪 Venezuela'}
  ],stations:[
    {agent:'director',x:10,y:3,activity:'Dirección regional'},
    {agent:'cornell',x:5,y:6,activity:'Análisis de resultados'},
    {agent:'cierres',x:10,y:10,activity:'Estrategias de cierre'},
    {agent:'coach',x:14,y:10,activity:'Capacitación'},
    {agent:'meta',x:15,y:6,activity:'Campañas'}
  ]},
  panama:{id:'panama',title:'Oficina Panamá',subtitle:'Operación y resultados · Cubitt y Casio',width:20,height:17,theme:'panama',agents:[],portals:[{id:'alto_mando',x:10,y:15,target:'alto_mando',label:'Volver al Alto Mando'}],stations:[]},
  colombia:{id:'colombia',title:'Oficina Colombia',subtitle:'Operación y resultados · Cubitt',width:20,height:17,theme:'colombia',agents:[],portals:[{id:'alto_mando',x:10,y:15,target:'alto_mando',label:'Volver al Alto Mando'}],stations:[]},
  venezuela:{id:'venezuela',title:'Oficina Venezuela',subtitle:'Operación y resultados · Cubitt',width:20,height:17,theme:'venezuela',agents:[],portals:[{id:'alto_mando',x:10,y:15,target:'alto_mando',label:'Volver al Alto Mando'}],stations:[]}
});
export function validateRoom(room){if(!room||!room.id||!Array.isArray(room.portals))throw Error('Sala inválida');for(const p of room.portals){if(!ROOMS[p.target])throw Error('Destino inexistente: '+p.target)}return true}
