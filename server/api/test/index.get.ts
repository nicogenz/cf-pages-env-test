export default defineEventHandler(() => {
  const { secretKey } = useRuntimeConfig()
  return { secretKey, anotherKey: 'anotherKey' }
})
