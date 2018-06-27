export default {
  method: 'POST',
  path: '/api/user',
  async handler (request, h) {
    return {
      message: 'User created!'
    }
  }
}