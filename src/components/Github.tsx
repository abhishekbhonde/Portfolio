import { Octokit } from '@octokit/rest';

// Create an instance of Octokit with your GitHub personal access token
const octokit = new Octokit({
  auth: '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',
});

// Function to fetch user's contribution data
async function fetchContributions(username: string) {
  try {
    const response = await octokit.rest.repos.getContributorsStats({
      owner: username,
      repo: '', // Leave this empty to get overall user contributions
    });
    // Extract the contribution data from the response
    const contributions = response.data;
    return contributions;
  } catch (error) {
    console.error('Error fetching contributions:', error);
    throw error;
  }
}

// Example usage
const username = 'abhishekbhonde';
fetchContributions(username)
  .then(contributions => {
    console.log('GitHub contributions:', contributions);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  export default fetchContributions