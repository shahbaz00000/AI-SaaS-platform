

const handleBlogTitleApi = async (blogTitlePrompt) => {
  try {
    const res = await fetch('http://localhost:3000/api/ai/blogTitle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ blogTitlePrompt })
    });
    const data = await res.json();
    if(res.status == 201){
        return data;
    }
    return data
  } catch (error) {
    console.error('Error calling blog title API:', error)
    throw error
  }
}

export default handleBlogTitleApi