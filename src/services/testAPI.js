export default {
  "apiIn": `$m.obj({
    data: $m.arr(1,30,'rint',1 ,30)
  })`,
  "apiIn2": `$m.obj({
    data: [{
      delegateName: $m.cstr(1,10),
      delegatelist_child: [{
        delegateID: $m.rint(1,1000),
        delegateName: $m.str(1,30),
      },{
        delegateID: $m.rint(1,1000),
        delegateName: $m.str(1,30),
      }]
    }]
  })`,
  "apiIn3": `$m.obj({
    data:$m.arr(1,30,'str_low',1)
  })`,
}


