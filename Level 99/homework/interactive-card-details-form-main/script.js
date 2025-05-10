const confirmBtn = document.querySelector('.btn');
    const form = document.querySelector('.form');
    const cardName = document.getElementById('c-name');
    const cardNumber = document.getElementById('c-number');
    const cardMM = document.getElementById('mm-card');
    const cardYY = document.getElementById('yy-card');
    const cardCVC = document.querySelector('.cvcc');
  
    confirmBtn.addEventListener('click', () => {
      const name = document.querySelector('.grid1').value.trim();
      const number = document.querySelector('.grid2').value.trim();
      const mm = document.querySelector('.mm').value.trim();
      const yy = document.querySelector('.yy').value.trim();
      const cvc = document.querySelector('.cvc').value.trim();
      cardName.textContent = name || 'Rezi';
      cardNumber.textContent = number || '0000 0000 0000 0000';
      cardMM.textContent = mm || '00';
      cardYY.textContent = yy || '00';
      cardCVC.textContent = cvc || '444';
      const displayForm = document.querySelector('.display-form');
      displayForm.innerHTML = `
        <div class="success-message" style="text-align: center; padding: 2rem;">
          <h2 style="color: green;">Card added successfully!</h2>
          <button class="continue-btn" style="margin-top: 2rem; padding: 1rem 2rem; font-size: 1rem; border-radius: 10px; background-color: rgb(12, 12, 66); color: white; border: none;">Continue</button>
        </div>
      `;
  
      // Reset on clicking Continue
      document.querySelector('.continue-btn').addEventListener('click', () => {
        // Clear card preview
        cardName.textContent = 'Rezi';
        cardNumber.textContent = '0000 0000 0000 0000';
        cardMM.textContent = '00';
        cardYY.textContent = '27';
        cardCVC.textContent = '444';
  
        // Restore form
        displayForm.innerHTML = `
          <form class="form">
            <div class="card-info1">
              <label for="grid1">CARDHOLDER NAME
                <input type="text" class="grid1" maxlength="50">
                <span class="span-name"></span>
              </label>
  
              <label for="grid2">Card Number
                <input type="text" class="grid2" maxlength="19">
                <span class="span-number"></span>
              </label>
            </div>
  
            <div class="card-info2">
              <label for="mm">MM
                <input type="text" class="mm" maxlength="2" style="width:5rem">
                <span class="span-mmyy"></span>
              </label>
  
              <label for="yy">YY
                <input type="text" class="yy" maxlength="2" style="width:5rem">
                <span class="span-yy"></span>
              </label>
  
              <label for="cvc">CVC
                <input type="text" class="cvc" maxlength="3" style="width:5rem">
                <span class="span-cvc"></span>
              </label>
            </div>
  
            <input type="button" class="btn" value="Confirm">
          </form>
        `;
  
        // Re-attach event listener to new Confirm button
        document.querySelector('.btn').addEventListener('click', () => {
          location.reload(); // Reload page to simplify logic and restore state
        });
      });
    });