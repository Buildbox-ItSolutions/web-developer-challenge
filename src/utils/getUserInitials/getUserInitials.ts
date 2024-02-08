function getUserNameInitials(name: string): string {
  const [firstName, lastName] = name.split(" ")

  return `${firstName[0]}${lastName ? lastName[0] : ""}`
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

export { getUserNameInitials }
