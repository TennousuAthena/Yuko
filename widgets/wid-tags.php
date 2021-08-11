<?php  
add_action( 'widgets_init', 'd_tags' );

function d_tags() {
	register_widget( 'd_tag' );
}

class d_tag extends WP_Widget {

	function __construct(){
		parent::__construct( 'd_tag', 'Yusi-标签云', array( 'classname' => 'd_tag' ) );
	}

	function widget( $args, $instance ) {
		extract( $args );

		$title = apply_filters('widget_name', $instance['title']);
		$count  = isset($instance['count']) ? $instance['count'] : '';
		$offset = isset($instance['offset']) ? $instance['offset'] : '';
		$more   = isset($instance['more']) ? $instance['more'] : '';
		$link   = isset($instance['link']) ? $instance['link'] : '';

		$mo='';
		if( $more!='' && $link!='' ) $mo='<a class="btn btn-primary" href="'.$link.'">'.$more.'</a>';

		echo $before_widget;
		echo $before_title.$mo.$title.$after_title; 
		echo '<div class="d_tags">';
		$tags_list = get_tags('orderby=count&order=DESC&number='.$count.'&offset='.$offset);
		if ($tags_list) { 
			foreach($tags_list as $tag) {
				echo '<a href="'.get_tag_link($tag).'">'. $tag->name .' ('. $tag->count .')</a>'; 
			} 
		}else{
			echo '暂无标签！';
		}
		echo '</div>';
		echo $after_widget;
	}

	function form($instance) {
		$defaults = array( 
			'title'  => '热门标签', 
			'count'  => 20, 
			'offset' => '',
			'more'   => '',
			'link'   => ''
		);
		$instance = wp_parse_args( (array) $instance, $defaults );
?>
		<p>
			<label>
				名称：
				<input id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo $instance['title']; ?>" class="widefat" />
			</label>
		</p>
		<p>
			<label>
				显示数量：
				<input id="<?php echo $this->get_field_id('count'); ?>" name="<?php echo $this->get_field_name('count'); ?>" type="number" value="<?php echo $instance['count']; ?>" class="widefat" />
			</label>
		</p>
		<p>
			<label>
				去除前几个：
				<input id="<?php echo $this->get_field_id('offset'); ?>" name="<?php echo $this->get_field_name('offset'); ?>" type="number" value="<?php echo $instance['offset']; ?>" class="widefat" />
			</label>
		</p>
		<p>
			<label>
				More 显示文字：
				<input style="width:100%;" id="<?php echo $this->get_field_id('more'); ?>" name="<?php echo $this->get_field_name('more'); ?>" type="text" value="<?php echo $instance['more']; ?>" size="24" />
			</label>
		</p>
		<p>
			<label>
				More 链接：
				<input style="width:100%;" id="<?php echo $this->get_field_id('link'); ?>" name="<?php echo $this->get_field_name('link'); ?>" type="url" value="<?php echo $instance['link']; ?>" size="24" />
			</label>
		</p>
<?php
	}
}

?>