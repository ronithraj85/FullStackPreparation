package Arrays.easy;

class SLESolution{
    public int getSecondLargestElement(int... nums){
        int maxElement =Integer.MIN_VALUE,secondMaxElement = Integer.MIN_VALUE;
        for(int n: nums){
            if(n>maxElement){
                secondMaxElement=maxElement;
                maxElement =n;
            }
            else if(n>secondMaxElement&&n!=maxElement){
                secondMaxElement=n;
            }
        }
        return  secondMaxElement;
    }
}

public class SecondLargestElement {
    public static  void main(String[] args){
        SLESolution sleSolution = new SLESolution();
        int result = sleSolution.getSecondLargestElement(new int[]{1,2,3,4,5,56,6,7,86});
        System.out.println("Second largest element is - "+result);
    }
}
