document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Step 1: ამოვიღოთ მნიშვნელობები input-ებიდან
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    // Step 2: შევქმნათ ობიექტი
    const user = {
      name: name,
      email: email,
      age: age
    };

    // Step 3: გავარკვიოთ რამდენი ადამიანი უკვე არის localStorage-ში
    let count = 1;
    while (localStorage.getItem(`person${count}`)) {
      count++;
    }

    // Step 4: ჩავამატოთ ახალი user როგორც personN
    localStorage.setItem(`person${count}`, JSON.stringify(user));

    // Optional: ვასუფთავებთ ფორმას
    document.getElementById("registrationForm").reset();

    alert(`User saved as person${count}`);
  });