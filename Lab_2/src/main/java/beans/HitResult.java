package beans;

import java.io.Serializable;
import java.util.Objects;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class HitResult implements Serializable {

    private Float x;
    private Float y;
    private Float r;
    private String currentTime;
    private String execTime;
    private Boolean isHit;

    @Override
    public String toString() {
        return "HitResult{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", currentTime='" + currentTime + '\'' +
                ", execTime='" + execTime + '\'' +
                ", isHit=" + isHit +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof HitResult)) return false;
        HitResult hitResult = (HitResult) o;
        return Float.compare(hitResult.getX(), getX()) == 0 &&
               Float.compare(hitResult.getY(), getY()) == 0 &&
               Float.compare(hitResult.getR(), getR()) == 0 &&
               isHit() == hitResult.isHit() &&
               Objects.equals( getCurrentTime(), hitResult.getCurrentTime() ) &&
               Objects.equals( getExecTime(), hitResult.getExecTime() );
    }

    @Override
    public int hashCode() {
        return Objects.hash(getX(), getY(), getR(), getCurrentTime(), getExecTime(), isHit());
    }
}
