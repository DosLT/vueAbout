

let condition = `
(function(){
  let result = false;
  result = true
  return result
})()`


console.log(eval(`${condition}`))

  (function (inventoryClicked, listRow, listColumn, listInventory, listTarget) {
    let result = false
    if (!inventoryClicked) {
      // 第一次进入清单时，
      result = !(listRow.length == 0 && listColumn.length == 0 && listTarget.length == 0)
        &&
        !JSON.parse(JSON.stringify(listTarget)).some(el => el.typeOwn === 'mixtarget')
        &&
        !(new Set(JSON.parse(JSON.stringify(listTarget)).filter(el => {
          return ['target', 'field', 'basictarget'].includes(el.typeOwn)
        }).map(elMap => elMap.grideNow)).size >= 2)
    } else {
      // n次进入清单之后
      if (listTarget > 0 && listInventory == 0) {
        result = !(listRow.length == 0 && listColumn.length == 0 && listTarget.length == 0)
          &&
          !JSON.parse(JSON.stringify(listTarget)).some(el => el.typeOwn === 'mixtarget')
          &&
          !(new Set(JSON.parse(JSON.stringify(listTarget)).filter(el => {
            return ['target', 'field', 'basictarget'].includes(el.typeOwn)
          }).map(elMap => elMap.grideNow)).size >= 2)
      }
      if (listInventory > 0) {
        result = !(listRow.length == 0 && listColumn.length == 0 && listInventory.length == 0)
          &&
          !JSON.parse(JSON.stringify(listInventory)).some(el => el.typeOwn === 'mixtarget')
          &&
          !(new Set(JSON.parse(JSON.stringify(listInventory)).filter(el => {
            return ['target', 'field', 'basictarget'].includes(el.typeOwn)
          }).map(elMap => elMap.grideNow)).size >= 2)
      }
    }
    return result
  })(this.inventoryClicked, this.listRow, this.listColumn, this.listInventory, this.listTarget)