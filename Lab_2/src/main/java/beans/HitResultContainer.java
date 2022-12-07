package beans;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import lombok.*;
import java.util.Collection;


@AllArgsConstructor
@Getter
@Setter
public class HitResultContainer {

    private List<HitResult> hitResultContainer;

    public HitResultContainer() {
        this.hitResultContainer = new ArrayList<>();
    }

    public Collection<HitResult> getLastElementInConainer(){
        if ( hitResultContainer != null && hitResultContainer.size() > 0 )
            return new ArrayList<HitResult>( List.of( this.hitResultContainer.get( this.hitResultContainer.size() - 1 ) ) );
        else
            return new ArrayList<HitResult>();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof HitResultContainer)) return false;
        HitResultContainer that = (HitResultContainer) o;
        return Objects.equals(getHitResultContainer(), that.getHitResultContainer());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getHitResultContainer());
    }

    @Override
    public String toString() {
        return "HitResultContainer{" +
                "getHitResultContainer=" + getHitResultContainer() +
                '}';
    }
}
