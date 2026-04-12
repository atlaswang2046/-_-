const fs = require('fs');
const data = JSON.parse(fs.readFileSync('V1_原型图_01统一预约工作台.pen', 'utf8'));

// Find pages with "营养" or "步骤2" or "Step2"
data.children.forEach(child => {
  if (child.name && (
    child.name.includes('营养') || 
    child.name.includes('步骤2') ||
    child.name.includes('Step2') ||
    child.name.includes('Step 2')
  )) {
    console.log('Found:', child.name, '| ID:', child.id, '| Size:', child.width, 'x', child.height);
  }
});
