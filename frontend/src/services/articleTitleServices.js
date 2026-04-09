const handleArticleApi = async (articlePrompt) => {
  try {
    const res = await fetch('http://localhost:3000/api/ai/generate-article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: articlePrompt })
    });
    const data = await res.json();
    if(res.status === 201){
        return data.content;
    } else {
      throw new Error(data.errorMessage || 'Failed to generate article');
    }
  } catch (error) {
    console.error('Error calling article API:', error)
    throw error
  }
}

export default handleArticleApi