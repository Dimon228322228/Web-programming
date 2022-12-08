package beans;

import java.util.ArrayList;
import java.util.List;
import java.util.Collection;

import lombok.*;

@AllArgsConstructor
@Data
public class HitResultContainer {

    private List<HitResult> hitResultContainer;

    public HitResultContainer() {
        this.hitResultContainer = new ArrayList<>();
    }

    public void add( HitResult hitResult ){
        this.hitResultContainer.add( hitResult );
    }

    public void clear(){
        this.hitResultContainer.clear();
    }

    public Collection<HitResult> getLastElementInContainer(){
        if ( hitResultContainer != null && hitResultContainer.size() > 0 )
            return new ArrayList<>( List.of( this.hitResultContainer.get( this.hitResultContainer.size() - 1 ) ) );
        else
            return new ArrayList<>();
    }
}
