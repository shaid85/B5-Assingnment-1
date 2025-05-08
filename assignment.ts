function formatString(input: string, toUpper?: boolean): string {
  let convertedInput: string = ''

  if (typeof toUpper == 'boolean' && typeof input == 'string') {
    if (toUpper == false) {
      convertedInput = input.toLowerCase()
    } else {
      convertedInput = input.toUpperCase()
    }
  } else {
    if (toUpper == undefined && typeof input == 'string') {
      convertedInput = input.toUpperCase()
    } else {
      convertedInput = `Wrong input format`
    }
  }

  return convertedInput
}
//not_defined-case
try {
  // console.log(formatString(amni))
} catch (error) {
  // console.log('Wrong input format')
}

type BookArray = {
  title: string
  rating: number
}[]
function filterByRating(items: BookArray): BookArray {
  let highRatingBook: BookArray = items.filter((item) => item.rating >= 4)
  return highRatingBook
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const combineOfArrays: T[] = []

  arrays.forEach((subArray) => {
    subArray.forEach((item) => {
      combineOfArrays.push(item)
    })
  })
  return combineOfArrays
}

class Vehicle {
  private Make: string
  public Year: number

  constructor(make: string, year: number) {
    this.Make = make
    this.Year = year
  }

  getInfo() {
    return `Make: ${this.Make}, Year: ${this.Year}`
  }
}

class Car extends Vehicle {
  private Model: string
  constructor(make: string, year: number, model: string) {
    super(make, year)
    this.Model = model
  }

  getModel() {
    return `Model: ${this.Model}`
  }
}

function processValue(value: string | number): number {
  let inputValue: number = 0
  if (typeof value == 'string') {
    inputValue = value.length
  } else if (typeof value == 'number') {
    inputValue = value * value
  } else {
    // console.log('Wrong input');
  }
  return inputValue
}

interface Product {
  name: string
  price: number
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  const expensiveProduct = products.reduce((max, product) =>
    product.price > max.price ? product : max
  )
  return expensiveProduct
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Sunday:
      return 'Weekend'
    default:
      return 'Weekday'
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error('Negative number not allowed'))
      } else {
        resolve(n * n)
      }
    }, 1000)
  })
}
