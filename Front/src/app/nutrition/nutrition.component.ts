import { Component } from '@angular/core';

@Component({
  selector: 'nutrition',
  templateUrl: './nutrition.component.html',
  styleUrl: './nutrition.component.css'
})
export class NutritionComponent { 
  Nutritional = [
  {
    img:'https://images.unsplash.com/photo-1727803886044-2510a30286e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4M3x4alBSNGhsa0JHQXx8ZW58MHx8fHx8',
    title: 'Eat fruits and vegetables',
    text:'Make sure to eat a variety of fruits and vegetables every day. They are rich in vitamins, minerals and fiber, which helps boost your overall health.',
  },
  {
    img:'https://images.unsplash.com/photo-1728931339590-c3bba05a7d01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1M3x4alBSNGhsa0JHQXx8ZW58MHx8fHx8',
    title: 'Choose whole grains.',
    text:'Replace refined grains like white bread with whole grain foods. Whole grains contain more fiber and nutrients.',
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D',
    title: 'Eat healthy proteins.',
    text:'Choose healthy sources of protein such as fish, chicken, legumes, and nuts. These options promote muscle health and help you feel full.',
  },
  {
    img:'https://images.unsplash.com/photo-1594046242778-99efad4832a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5OXx4alBSNGhsa0JHQXx8ZW58MHx8fHx8',
    title: 'Reduce sugar and salt',
    text:'Try to reduce your intake of added sugar and salt. Read food labels to determine the sugar and salt content of foods.',
  },
  {
    img:'https://images.unsplash.com/photo-1616118133712-8c947f7b822c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww',
    title: 'Drink enough water',
    text:'Make sure you drink enough water throughout the day. Water helps you stay hydrated and feel full.',
  },

  ]
}
