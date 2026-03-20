const fs = require('fs');
const data = JSON.parse(fs.readFileSync('V1_原型图_01统一预约工作台.pen', 'utf8'));

console.log("Top-level frames/pages:");
data.children.forEach(child => {
  console.log(`- ${child.name} (id: ${child.id})`);
});
