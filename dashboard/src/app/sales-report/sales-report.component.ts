import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit, AfterViewInit {
  selectedCategory: string = 'Food';
  selectedProduct: string = 'Cereals';
  selectedBrand: string = 'Kellogs';

  categories: string[] = ['Food', 'Drink', 'Electronics'];
  products: { [key: string]: string[] } = {
    Food: ['Cereals'],
    Drink: ['Soda'],
    Electronics: ['Laptop']
  };
  brands: { [key: string]: string[] } = {
    Food: ['Kellogs'],
    Drink: ['CocaCola'],
    Electronics: ['Dell']
  };

  salesData: { [key: string]: number[] } = {
    'Food_Cereals_Kellogs': [10, 4, 25, 10],
    'Drink_Soda_CocaCola': [20, 10, 7, 5],
    'Electronics_Laptop_Dell': [10, 10, 5, 5]
  };

  private salesChart: Chart | undefined;

  constructor() { }

  ngOnInit(): void {
    this.selectedCategory = 'Food';
    this.selectedProduct = 'Cereals';
    this.selectedBrand = 'Kellogs';
  }

  ngAfterViewInit(): void {
    if (this.selectedCategory === 'Food' && this.selectedProduct === 'Cereals' && this.selectedBrand === 'Kellogs') {
      this.updateChart();
    }
  }

  onCategoryChange(): void {
    this.selectedProduct = '';
    this.selectedBrand = '';
  }

  onBrandChange() : void{
    console.log('Selected Category:', this.selectedCategory);
    console.log('Selected Product:', this.selectedProduct);
    console.log('Selected Brand:', this.selectedBrand);

    // Atualizar o gráfico com as novas seleções
    this.updateChart();
  }

  private updateChart(): void {
    const selectedKey = `${this.selectedCategory}_${this.selectedProduct}_${this.selectedBrand}`;
    const sales = this.salesData[selectedKey];
    
    const canvas: any = document.getElementById('salesChart');
    const ctx = canvas.getContext('2d');
  
    if (!this.salesChart) {
      this.salesChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April'],
          datasets: [{
            label: 'Sales',
            data: sales,
            backgroundColor: ['blue', 'green', 'yellow', 'orange']
          }]
        },
        options: {
          scales: {
            x: {
              beginAtZero: true
            },
            y: {
              beginAtZero: true
            }
          }
        }
      });
    } else {
      this.salesChart.data.datasets[0].data = sales;
      this.salesChart.update();
    }
  }
  
}
