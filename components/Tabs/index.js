// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

    axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(response => {
        const topics = document.querySelector('.topics');
        response.data.topics.forEach(element => {
            topics.appendChild(createTabs(element));
        })


    })    
    .catch(err => {
      console.log(`Error: ${err}`);
    });

    function createTabs(data)
    {
        const compTab = document.createElement('div');
        compTab.classList.add('tab');

        compTab.textContent = data;
        return compTab;
    }
