function defangedIPAddress(ip_address, replacingCharacter) {
  if (ip_address.length < 1) return "";

  const array = [];
  let astringe = "";
  let defanged = "";
  for (let index = 0; index < ip_address.length; ++index) {
    if (ip_address[index] === ".") {
      array.push(astringe);
      astringe = "";
    } else {
      astringe += ip_address[index];
    }

    if (index === ip_address.length - 1) {
      array.push(astringe);
    }
  }

  for (let index = 0; index < array.length; ++index) {
    if (index !== array.length - 1) {
      defanged += array[index] + replacingCharacter;
    } else {
      defanged += array[index];
    }
  }

  console.log(defanged);
}

// defangedIPAddress("255.100.50.0", "[.]");

function reverseVowels(string) {
  const vowels = "aieouAIEOU";
  let leftVowel = -1;
  let rightVowel = -1;
  const array = Array.from(string);
  for (let left = 0, right = string.length - 1; left < right; ++left, --right) {
    if (vowels.indexOf(string[left]) !== -1 && leftVowel === -1) {
      leftVowel = left;
    }

    if (vowels.indexOf(string[right]) !== -1 && rightVowel === -1) {
      rightVowel = right;
    }

    if (leftVowel !== -1 && rightVowel !== -1) {
      array[leftVowel] = string[rightVowel];
      array[rightVowel] = string[leftVowel];
      leftVowel = -1;
      rightVowel = -1;
    }
  }

  console.log("done", array.join(""));
}

// reverseVowels("neoGCamp");

function countFruits(fruits, summerFruits) {
  if (fruits.length < 1 || summerFruits.length < 1) {
    return -1;
  }
  let count = 0;
  let index = fruits.length;
  while (index--) {
    if (summerFruits.indexOf(fruits[index]) !== -1) {
      ++count;
    }
  }
  return count;
}

//countFruits("aaAAbbbb", "");
