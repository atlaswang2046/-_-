const fs = require('fs');
const data = JSON.parse(fs.readFileSync('V1_原型图_01统一预约工作台.pen', 'utf8'));

// Check for existing detail drawer/component
const detailKeywords = ['详情', '订单详情', 'Drawer', '订单'];
data.children.forEach(child => {
  if (child.name && (
    child.name.includes('详情') || 
    child.name.includes('Drawer') ||
    child.name.includes('订单详情')
  )) {
    console.log('Found:', child.name, '| ID:', child.id);
  }
});

console.log('\n--- Checking for Overlay 订单详情 Drawer ---');
const drawer = data.children.find(c => c.name === 'Overlay 订单详情 Drawer');
if (drawer) {
  console.log('Found! ID:', drawer.id);
  console.log('Dimensions:', drawer.width, 'x', drawer.height);
}
