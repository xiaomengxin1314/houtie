export function getAssignPermission (list, pid) {
  const list1 = []
  list.forEach(item => {
    if (item.pid === pid) { list1.push(item) }
    item.children = getAssignPermission(list, item.id)
  })
}
