package Structure;

public class DecoratorCoffee {
    public abstract class Beverage {
        private String description;

        public Beverage(String description) {
            super();
            this.description = description;
        }

        public String getDescription() {
            return description;
        }

        public abstract double cost();
    }

    public class HouseBlend extends Beverage {
        public HouseBlend() {
            super(“House blend”);
        }

        @Override
        public double cost() {
            return 250;
        }
    }

    public class DarkRoast extends Beverage {
        public DarkRoast() {
            super(“Dark roast”);
        }

        @Override
        public double cost() {
            return 300;
        }
    }

    public abstract class AddOn extends Beverage {
        protected Beverage beverage;

        public AddOn(String description, Beverage bev) {
            super(description);
            this.beverage = bev;
        }

        public abstract String getDescription();
    }

    public class Sugar extends AddOn {
        public Sugar(Beverage bev) {
            super(“Sugar”, bev);
        }

        @Override
        public String getDescription() {
            return beverage.getDescription() + “ with Mocha”;
        }

        @Override
        public double cost() {
            return beverage.cost() + 50;
        }
    }

    public class Milk extends AddOn {
        public Milk(Beverage bev) {
            super(“Milk”, bev);
        }

        @Override
        public String getDescription() {
            return beverage.getDescription() + “ with Milk”;
        }

        @Override  public double cost() {
            return beverage.cost() + 100;
        }
    }

    public class CoffeeShop {
        public static void main(String[] args) {
            HouseBlend houseblend = new HouseBlend();
            System.out.println(houseblend.getDescription() + “: “ + houseblend.cost());

            Milk milkAddOn = new Milk(houseblend);
            System.out.println(milkAddOn.getDescription() + “: “ + milkAddOn.cost());

            Sugar sugarAddOn = new Sugar(milkAddOn);
            System.out.println(sugarAddOn.getDescription() + “: “ + sugarAddOn.cost());
        }
    }
}
