document.addEventListener('DOMContentLoaded', () => {
  const newRocketForm = document.querySelector('#new-rocket-form');
  newRocketForm.addEventListener('submit', handleNewRocketFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const handleNewRocketFormSubmit = function (event) {
  event.preventDefault();

  const rocketListItem = createRocketListItem(event.target);
  const rocketList = document.querySelector('#rocket-list');
  rocketList.appendChild(rocketListItem);

  // event.target.reset();
  document.querySelector('#new-rocket-form').reset();
}

const createRocketListItem = function (form) {
  const rocketListItem = document.createElement('ul');
  rocketListItem.classList.add('rocket-list-item');
  //What does this do?

  const rocketName = document.createElement('h4');
  rocketName.textContent = form.rocketName.value;
  rocketListItem.appendChild(rocketName);

  const firstStage = document.createElement('li');
  firstStage.textContent = form.firstStage.value;
  rocketListItem.appendChild(firstStage);

  const secondStage = document.createElement('li');
  secondStage.textContent = form.secondStage.value;
  rocketListItem.appendChild(secondStage);

  const numberBoosters = document.createElement('li');
  numberBoosters.textContent = form.numberBoosters.value;
  rocketListItem.appendChild(numberBoosters);

  const parachutes = document.createElement('li');
  parachutes.textContent = form.parachutes.value;
  rocketListItem.appendChild(parachutes);

  rocketListItem.appendChild(document.createElement('br'));

  return rocketListItem;

}

const handleDeleteAllClick = function (event) {
  const rocketList = document.querySelector('#rocket-list');
  rocketList.innerHTML = '';
}
