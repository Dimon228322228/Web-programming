package beans;

import java.io.Serializable;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class HitResult implements Serializable {
    private Double x;
    private Double y;
    private Double r;
    private String currentTime;
    private String execTime;
    private boolean hit;
}
