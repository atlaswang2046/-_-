const fs = require('fs');
const data = JSON.parse(fs.readFileSync('V1_原型图_01统一预约工作台.pen', 'utf8'));

function findFrameByName(data, name) {
  function search(node) {
    if (node.name === name) return node;
    if (node.children) {
      for (const child of node.children) {
        const found = search(child);
        if (found) return found;
      }
    }
    return null;
  }
  return search(data);
}

// Find P3-01
const p3_01 = findFrameByName(data, 'P3-01 订单与预约处理台');
if (p3_01) {
  console.log('Found P3-01:', p3_01.id);
  console.log('Children count:', p3_01.children?.length || 0);
  
  // Look for buttons or "详情" text
  function findDetailsButton(node, path = '') {
    if (!node) return;
    if (node.name && node.name.includes('详情')) {
      console.log('Found detail button:', node.name, 'at', path);
    }
    if (node.children) {
      node.children.forEach((child, i) => findDetailsButton(child, path + '/children/' + i));
    }
  }
  findDetailsButton(p3_01);
} else {
  console.log('P3-01 not found');
}
