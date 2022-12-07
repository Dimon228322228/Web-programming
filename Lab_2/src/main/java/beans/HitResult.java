package beans;

import java.io.Serializable;
import java.util.Objects;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class HitResult implements Serializable {

    private Double x;
    private Double y;
    private Double r;
    private String currentTime;
    private String execTime;
    private boolean hit;

    @Override
    public String toString() {
        return "HitResult{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", currentTime='" + currentTime + '\'' +
                ", execTime='" + execTime + '\'' +
                ", isHit=" + hit +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof HitResult hitResult)) return false;
        return Double.compare(hitResult.getX(), getX()) == 0 &&
               Double.compare(hitResult.getY(), getY()) == 0 &&
               Double.compare(hitResult.getR(), getR()) == 0 &&
               isHit() == hitResult.isHit() &&
               Objects.equals( getCurrentTime(), hitResult.getCurrentTime() ) &&
               Objects.equals( getExecTime(), hitResult.getExecTime() );
    }

    @Override
    public int hashCode() {
        return Objects.hash(getX(), getY(), getR(), getCurrentTime(), getExecTime(), isHit());
    }
}
