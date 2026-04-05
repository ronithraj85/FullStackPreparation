package Arrays.easy;

class SolutionLargestElement
{
    public int getLargestElement(int... nums){
        int maxElem = Integer.MIN_VALUE;
        for(int n:nums){
            if(n>maxElem){
                maxElem=n;
            }
        }
        return maxElem;
    }
}

public class LargestElement {
    public static void main(String[] args) {
        SolutionLargestElement sle = new SolutionLargestElement();
        int res = sle.getLargestElement(new int[]{2,3,1,4,125,1,25,21});
        System.out.println(res);
    }
}
