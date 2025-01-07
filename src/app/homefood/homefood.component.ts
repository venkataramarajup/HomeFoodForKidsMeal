import { Component, OnInit } from '@angular/core';
import { CatalogComponent } from "./catalog/catalog.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homefood',
  standalone: true,
  imports: [CatalogComponent, CommonModule],
  templateUrl: './homefood.component.html',
  styleUrl: './homefood.component.scss'
})
export class HomefoodComponent implements OnInit {
  displayArrowIcon = true;


  vegitablesArray = [
    {
      id:1, 
      name: 'Carrot', 
      Description: [
        'Carrots are highly nutritious vegetables that offer a wide range of health benefits',
        'Carrots are a particularly good source of beta carotene, fiber, vitamin K1, potassium, and antioxidants',
        'They also have a number of health benefits. They’re a weight-loss-friendly food and have been linked to lower cholesterol levels and improved eye health',
        'What’s more, their carotene antioxidants have been linked to a reduced risk of cancer',
        'Help prevent skin dryness and delay signs of aging, such as wrinkles',
        'Carrots are a good source of dietary fiber, which promotes regular bowel movements, prevents constipation, and supports gut health.',
        'Carrots have a relatively low GI, which helps regulate blood sugar levels.',
        'Carrots are a versatile and nutrient-packed addition to any diet. Whether eaten raw or cooked, they provide substantial health benefits that support overall well-being!',
        '100-gram serving of raw carrots -> ~41 kcal of Calories, ~9.6 g of Carbohydrates, ~2.8 g of Fiber, ~5% DV (3.6 mg) of VitC, ~2% DV of Iron, ~334% DV of VitA'
      ], 
      price: 10, 
      image: 'assets/carrot.jpg'
    },
    {
      id:2, name: 'Curry Leaf', 
      Description: [
        'Contains vitamins A, B, C, and E, which support overall health.',
        'Rich in antioxidants that fight oxidative stress and inflammation in the body.',
        'May help reduce cholesterol levels and protect heart health.',
        'Curry leaves enhance digestive secretions, improving digestion.',
        'Contains compounds that help reduce LDL (bad cholesterol) levels and increase HDL (good cholesterol).',
        'Potassium and antioxidants in curry leaves help maintain blood pressure',
        'Curry leaves help burn fat more efficiently.',
        'Studies suggest curry leaves may reduce fat storage by regulating lipid metabolism',
        'Curry leaves help improve insulin sensitivity and regulate blood glucose levels',
        'Essential for maintaining good vision and preventing night blindness',
        'Curry leaves are believed to support liver function and protect against liver damage',
        'May help reduce symptoms of pain and inflammation in the body.',
        'Curry leaf contains -> 108 kcal Calories, ~6.1 g of protein, ~18.7 g of Carbohydrates, ~1 g of fat, ~120% DV of VitA, ~8% DV of Vit B6, ~830 mg of Calcium, ~57 mg of Phosphorus',
      ], 
      price: 10, image: 'assets/curryleaf.jpg'
    },
    {
      id:3, name: 'Cabbage', 
      Description: [
        'Boosts immunity and promotes skin health',
        'Essential for blood clotting and bone health',
        'Important for cell growth and DNA formation',
        'Encourages the growth of healthy gut bacteria',
        'Helps cleanse the digestive system by removing toxins',
        'Acts like a Natural Detoxifier',
        'Boosts Immunity',
        'Help reduce inflammation and protect against heart disease',
        'Fiber binds to bile acids, helping to remove cholesterol from the body',
        'Makes it an ideal food for weight management',
        'Plays a key role in maintaining bone density and preventing osteoporosis',
        'Helps keep the body hydrated, especially when consumed raw',
        'Cabbage contains -> ~40 mg of Calcium, ~0.5 mg of Iron, ~12 mg of Magnesium, ~0.02 mg of Copper, ~92% of cabbage is water',
      ], 
      price: 10, image: 'assets/cabbage.jpg'
    },
    {
      id:4, name: 'Beetroot', 
      Description: [
        'High in vitamin C, B6, and folate (vitamin B9), which are crucial for immune function, energy production, and cell repair',
        'Rich in potassium, magnesium, iron, manganese, and copper, which support heart health, muscle function, and red blood cell production',
        'Contains betalains, powerful antioxidants that reduce oxidative stress',
        'High nitrate content in beetroot converts to nitric oxide in the body, which relaxes blood vessels and improves blood flow',
        'Promotes healthy digestion, prevents constipation, and supports gut health',
        'Aids in breaking down fats and detoxifying the liver',
        'Nitric oxide improves blood flow to the brain, which may enhance mental clarity and reduce the risk of dementia',
        'Protects skin from damage caused by free radicals',
        'Essential for preventing neural tube defects in developing babie',
        'Beetroot contains -> ~16 mg of Calcium, ~0.8 mg of Iron, ~325 mg of Potassium, ~0.07 mg of Copper'
      ], 
      price: 20, image: 'assets/beetroot.jpg'
    },




    {
      id:1, 
      name: 'Carrot', 
      Description: [
        'Carrots are highly nutritious vegetables that offer a wide range of health benefits',
        'Carrots are a particularly good source of beta carotene, fiber, vitamin K1, potassium, and antioxidants',
        'They also have a number of health benefits. They’re a weight-loss-friendly food and have been linked to lower cholesterol levels and improved eye health',
        'What’s more, their carotene antioxidants have been linked to a reduced risk of cancer',
        'Help prevent skin dryness and delay signs of aging, such as wrinkles',
        'Carrots are a good source of dietary fiber, which promotes regular bowel movements, prevents constipation, and supports gut health.',
        'Carrots have a relatively low GI, which helps regulate blood sugar levels.',
        'Carrots are a versatile and nutrient-packed addition to any diet. Whether eaten raw or cooked, they provide substantial health benefits that support overall well-being!',
        '100-gram serving of raw carrots -> ~41 kcal of Calories, ~9.6 g of Carbohydrates, ~2.8 g of Fiber, ~5% DV (3.6 mg) of VitC, ~2% DV of Iron, ~334% DV of VitA'
      ], 
      price: 10, 
      image: 'assets/carrot.jpg'
    },
    {
      id:2, name: 'Curry Leaf', 
      Description: [
        'Contains vitamins A, B, C, and E, which support overall health.',
        'Rich in antioxidants that fight oxidative stress and inflammation in the body.',
        'May help reduce cholesterol levels and protect heart health.',
        'Curry leaves enhance digestive secretions, improving digestion.',
        'Contains compounds that help reduce LDL (bad cholesterol) levels and increase HDL (good cholesterol).',
        'Potassium and antioxidants in curry leaves help maintain blood pressure',
        'Curry leaves help burn fat more efficiently.',
        'Studies suggest curry leaves may reduce fat storage by regulating lipid metabolism',
        'Curry leaves help improve insulin sensitivity and regulate blood glucose levels',
        'Essential for maintaining good vision and preventing night blindness',
        'Curry leaves are believed to support liver function and protect against liver damage',
        'May help reduce symptoms of pain and inflammation in the body.',
        'Curry leaf contains -> 108 kcal Calories, ~6.1 g of protein, ~18.7 g of Carbohydrates, ~1 g of fat, ~120% DV of VitA, ~8% DV of Vit B6, ~830 mg of Calcium, ~57 mg of Phosphorus',
      ], 
      price: 10, image: 'assets/curryleaf.jpg'
    },
    {
      id:3, name: 'Cabbage', 
      Description: [
        'Boosts immunity and promotes skin health',
        'Essential for blood clotting and bone health',
        'Important for cell growth and DNA formation',
        'Encourages the growth of healthy gut bacteria',
        'Helps cleanse the digestive system by removing toxins',
        'Acts like a Natural Detoxifier',
        'Boosts Immunity',
        'Help reduce inflammation and protect against heart disease',
        'Fiber binds to bile acids, helping to remove cholesterol from the body',
        'Makes it an ideal food for weight management',
        'Plays a key role in maintaining bone density and preventing osteoporosis',
        'Helps keep the body hydrated, especially when consumed raw',
        'Cabbage contains -> ~40 mg of Calcium, ~0.5 mg of Iron, ~12 mg of Magnesium, ~0.02 mg of Copper, ~92% of cabbage is water',
      ], 
      price: 10, image: 'assets/cabbage.jpg'
    },
    {
      id:4, name: 'Beetroot', 
      Description: [
        'High in vitamin C, B6, and folate (vitamin B9), which are crucial for immune function, energy production, and cell repair',
        'Rich in potassium, magnesium, iron, manganese, and copper, which support heart health, muscle function, and red blood cell production',
        'Contains betalains, powerful antioxidants that reduce oxidative stress',
        'High nitrate content in beetroot converts to nitric oxide in the body, which relaxes blood vessels and improves blood flow',
        'Promotes healthy digestion, prevents constipation, and supports gut health',
        'Aids in breaking down fats and detoxifying the liver',
        'Nitric oxide improves blood flow to the brain, which may enhance mental clarity and reduce the risk of dementia',
        'Protects skin from damage caused by free radicals',
        'Essential for preventing neural tube defects in developing babie',
        'Beetroot contains -> ~16 mg of Calcium, ~0.8 mg of Iron, ~325 mg of Potassium, ~0.07 mg of Copper'
      ], 
      price: 20, image: 'assets/beetroot.jpg'
    },
  ];
  foodArray: any = [];
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.foodArray = this.vegitablesArray.filter((item, index) => index < 4);
  }

  openpopumodel: boolean = false;
  selectedVegitable: any = {};
  openpopup(vegetable: any) {
    this.openpopumodel = true;
    this.selectedVegitable = vegetable;
  }

  closepopup(event: any) {
    console.log(event)
    this.openpopumodel = false;
    this.selectedVegitable = '';
  }

  redirectToCatalogpage() {
    this.router.navigate(['/homefood/catalog']);
    // this.redirectToCatalog.emit({ redirect: true });
  }

}
