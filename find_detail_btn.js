const fs = require('fs');
const data = JSON.parse(fs.readFileSync('V1_原型图_01统一预约工作台.pen', 'utf8'));

function findButtonText(node, target) {
  if (!node) return;
  if (node.content === target) {
    console.log('Found:', target);
    console.log('Node ID:', node.id);
    console.log('Node Name:', node.name);
    console.log('Parent info:', node.parent);
  }
  if (node.children) {
    node.children.forEach(child => findButtonText(child, target));
  }
}

// Search for "详情" text in P3-01 area
const p3_01 = data.children.find(c => c.name === 'P3-01 订单与预约处理台');
if (p3_01) {
  findButtonText(p3_01, '详情');
}
