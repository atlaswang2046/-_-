import re

with open('PRD文档-GSD/V1_康养调度中心_4级菜单详细功能清单.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Add Paper itinerary / wristband and history alert to 3.1.1 & 3.1.2
content = content.replace(
    "  - `[按钮]` [生成/更新行程]、[推送至小程序]、[复制H5短链接]",
    "  - `[按钮]` [生成/更新行程]、[推送至小程序]、[复制H5短链接]、[生成纸质打印版(用于导出或手环扫码校验)]"
)

content = content.replace(
    "  - `[操作]` 前台入住核验：输入客户信息调出该单 -> 业务员勾选所有“已口头确认”的项目 -> 录入特殊偏好（如忌口、睡眠习惯） -> 点击[核对无误并同步下游]，完成履约前二次确认",
    "  - `[视图]` 历史异常预警：若该客户历史上有过“迟到、爽约、违约金拒付”记录，在核对表顶部展示黄色预警标签提醒前台加强确认\n  - `[操作]` 前台入住核验：输入客户信息调出该单 -> 业务员勾选所有“已口头确认”的项目 -> 录入特殊偏好（如忌口、睡眠习惯） -> 点击[核对无误并同步下游]，完成履约前二次确认"
)

# Write back
with open('PRD文档-GSD/V1_康养调度中心_4级菜单详细功能清单.md', 'w', encoding='utf-8') as f:
    f.write(content)

print("Menu patched 2 successfully.")
